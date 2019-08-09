import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons'
import {OffCanvas3D} from 'react-native-off-canvas-menu'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, actionTypes } from '../../actions/UserActions';
import getUser from '../../selectors/UserSelectors';
import errorsSelector from '../../selectors/ErrorSelectors';
import { isLoadingSelector } from '../../selectors/StatusSelectors';



import Menu1 from './menuScenes/menu1'
import Menu2 from './menuScenes/menu2'
import Menu3 from './menuScenes/menu3'
import Menu4 from './menuScenes/menu4'
import Menu5 from './menuScenes/menu5'
import Menu6 from './menuScenes/menu6'
import Menu7 from './menuScenes/menu7'
import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import eventsIcon from "../navigation/header.png";

class Navigator extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

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
      this.props.navigation.navigate('App');
    }
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }


  passwordChanged = value => this.setState({ password: value });

  emailChanged = value => this.setState({ email: value });

  login = () => this.props.login(this.state.email, this.state.password);

  render() {

      const {navigate} = this.props.navigation;
    const statusBar = this.state.menuOpen ?
        <StatusBar
            backgroundColor="#222222"
            animated={true}
        />
        : null

    return (
        <View style={{flex: 1}}>

          {statusBar}

          <OffCanvas3D
              active={this.state.menuOpen}
              onMenuPress={this.handleMenu.bind(this)}
              backgroundColor={'#4E8BF3'}
              menuTextStyles={{color: 'white'}}
              handleBackPress={true}
              menuItems={[
                {
                  title: 'Menu 1',
                  icon: <Icon name="camera" size={35} color='#ffffff' />,
                  renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 2',
                  icon: <Icon name="bell" size={35} color='#ffffff' />,
                  renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 3',
                  icon: <Icon name="calendar" size={35} color='#ffffff' />,
                  renderScene: <Menu3 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 4',
                  icon: <Icon name="cart" size={35} color='#ffffff' />,
                  renderScene: <Menu4 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 5',
                  icon: <Icon name="chart" size={35} color='#ffffff' />,
                  renderScene: <Menu5 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 6',
                  icon: <Icon name="heart" size={35} color='#ffffff' />,
                  renderScene: <Menu6 handleMenu={this.handleMenu.bind(this)}/>
                },
                {
                  title: 'Menu 7',
                  icon: <Icon name="gear" size={35} color='#ffffff' />,
                  renderScene: <Menu7 handleMenu={this.handleMenu.bind(this)}/>
                }
              ]}/>

        </View>
    )
  }
}

Navigator.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

Navigator.defaultProps = {
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






export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
