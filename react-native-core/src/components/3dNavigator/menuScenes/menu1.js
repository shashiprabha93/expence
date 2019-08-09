import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,

  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Icon} from 'native-base';
import Button from '@material-ui/core/Button';
import React from 'react'


import ModalDatePicker from 'react-native-datepicker-modal'

import colors from './config/colors'
import spacing from './config/spacing'
import fontSize from './config/fontSize'


export default class Menu1 extends Component {
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

const DatePicker = ({ style, ...props }) => (
    <ModalDatePicker
        style={[styles.container, style]}
        renderDate={({ year, month, day, date }) => {
          if (!date) {
            return <Text style={[styles.text, styles.placeholderText]}>Date of birth</Text>
          }

          const dateStr = `${day}-${month}-${year}`
          return <Text style={styles.text}>{dateStr}</Text>
        }}
        {...props}
    />
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomColor: colors.gray.veryLight,
    borderBottomWidth: 1,
    marginVertical: spacing[1],
    marginHorizontal: spacing[0],
    justifyContent: 'center',
    borderRadius: 2,
    height: 50
  },
  placeholderText: {
    color: colors.gray.light
  },
  text: {
    width: '100%',
    paddingHorizontal: spacing[1],
    paddingVertical: spacing[0],
    fontFamily: 'Montserrat',
    fontSize: fontSize.medium,
    color: colors.gray.dark
  }
})