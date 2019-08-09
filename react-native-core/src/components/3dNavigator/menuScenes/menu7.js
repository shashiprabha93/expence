import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native'
import {Icon} from "native-base";

export default class Menu7 extends Component {
  render() {
    return(

        <View style={styles.container}>
          <TouchableOpacity onPress={ () => this.props.handleMenu() }
                            style={styles.button}>
            <Icon
                reverse
                name='md-list'
                size={25}
                style={{height:25,width:25,color:'#4E8BF3'}}/>

          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'right-end',
    // flexDirection: 'column',
    backgroundColor: '#FFFFFF',

  },

  button: {
    justifyContent: 'center',
    // textAlign: 'center',
    width: 70,
    height: 40,
    backgroundColor: 'transparent',
    margin: 10
  },
})
