import React, { Component } from 'react';
import {
    View,
    Image,
    Text, TouchableOpacity,ScrollView
} from 'react-native';
import pigImg from "./pigNew.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import ShadowStyles from '../../helpers/ShadowStyles';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import { login, actionTypes } from '../../actions/UserActions';
import getUser from '../../selectors/UserSelectors';
import errorsSelector from '../../selectors/ErrorSelectors';
import { isLoadingSelector } from '../../selectors/StatusSelectors';
import styles from './styles';

class Signup extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.navigateToHomeIfLogged();
    }

    state = {
        email: '',
        password: '',
        name:'',
    };

    componentDidUpdate() {
        this.navigateToHomeIfLogged();
        return null;
    }

    navigateToHomeIfLogged = () => {
        if (this.props.user !== null) {
            this.props.navigation.navigate('App');
        }
    }

    passwordChanged = value => this.setState({ password: value });

    emailChanged = value => this.setState({ email: value });
    nameChanged = value => this.setState({ name: value });

    login = () => this.props.login(this.state.email, this.state.password);

    render() {

        const {navigate} = this.props.navigation;
        const { isLoading, errors } = this.props;
        return (

            <View>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps='handled'
                >

            <View style={styles.container}>

                <View style={styles.logoContainer}>

                    <Image

                        style={styles.logo}
                        source={pigImg}
                    />


                </View>

                <View style={styles.forgetContainer}>
                    <Text style={{fontWeight: "bold",fontSize:16}}>
                        Sing up to Expense Tracker
                    </Text>
                    <Text style={{fontSize:12}}>
                       Keep your financial data store to our server so that
                    </Text >
                    <Text style={{fontSize:12}} >
                      you can access anywhere you want
                    </Text>
                </View>

                <View style={[styles.formContainer, ShadowStyles.shadow]}>





                    <Text style={TextStyles.fieldTitle}>
                        {strings.name}
                    </Text>
                    <TextField
                        placeholder={strings.name}
                        onChangeText={this.nameChanged}
                        value={this.state.name}
                    />
                    <Text style={TextStyles.fieldTitle}>
                        {strings.email}
                    </Text>
                    <TextField
                        placeholder={strings.email}
                        onChangeText={this.emailChanged}
                        value={this.state.email}
                    />
                    <Text style={TextStyles.fieldTitle}>
                        {strings.password}
                    </Text>
                    <TextField
                        placeholder={strings.password}
                        value={this.state.password}
                        onChangeText={this.passwordChanged}
                        secureTextEntry
                    />
                    <ErrorView errors={errors} />
                    <Button

                        title={isLoading ? strings.loading : strings.signup}
                    />

                </View>

                <View style={styles.signUpContainer}>

                    <TouchableOpacity onPress={() => navigate('Login')} >
                        <Text>
                            Do have a Account?

                            <Text style={{color:'#4E8BF3'}}> Sign In </Text>

                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
                </ScrollView>
            </View>
        );
    }
}

Signup.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.array,
    navigation: PropTypes.object.isRequired,
};

Signup.defaultProps = {
    user: null,
    errors: [],
};

const mapStateToProps = state => ({
    user: getUser(state),
    isLoading: isLoadingSelector([actionTypes.LOGIN], state),
    errors: errorsSelector([actionTypes.LOGIN], state),
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
