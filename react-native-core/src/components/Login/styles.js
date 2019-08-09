import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.newWhite,

  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: Colors.newWhite,
    marginHorizontal: 40,
    // padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    // alignSelf: 'stretch',
    // flexGrow: 1,
    // height: 200,
    justifyContent: 'center',

    // backgroundColor:'#EAEB5E'
  },
  logo: {
    width: 315,
    height: 250,
    alignItems:'center',
    justifyContent:'center',
    // alignSelf: 'stretch',
    // top:40
  },
  forgetContainer:{
    // alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#EAEB5E',
    marginTop: 5,
    padding: 8,

  },
  signUpContainer:{
    // alignSelf: 'stretch',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    marginHorizontal: 40,
    padding: 18,
  },

  forgetPasswordTitle:{
    textAlign: 'center',
  },

});

export default styles;
