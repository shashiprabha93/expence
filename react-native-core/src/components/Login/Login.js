import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity
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

class Login extends Component {
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
  };

  componentDidUpdate() {
    this.navigateToHomeIfLogged();
    return null;
  }

  navigateToHomeIfLogged = () => {
    if (this.props.user !== null) {
      this.props.navigation.navigate('Stack');
    }
  }

  passwordChanged = value => this.setState({ password: value });

  emailChanged = value => this.setState({ email: value });

  login = () => this.props.login(this.state.email, this.state.password);

  render() {
    const { isLoading, errors } = this.props;
    const {navigate} = this.props.navigation;
    return (


      <View style={styles.container}>

        <View style={styles.logoContainer}>

          <Image

          style={styles.logo}
          source={pigImg}
          />


        </View>

        <View style={[styles.formContainer, ShadowStyles.shadow]}>
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
            onPress={this.login}
            title={isLoading ? strings.loading : strings.login}
          />

        </View>

        <View style={styles.forgetContainer}>
          <Text >
            {strings.forgetPassword}
          </Text>
        </View>


        <View style={styles.signUpContainer}>

          <TouchableOpacity  onPress={() => navigate('Signup')}>
          <Text>
            Don't have a Account?

            <Text style={{color:'#4E8BF3'}}> Sign Up </Text>

          </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

Login.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
