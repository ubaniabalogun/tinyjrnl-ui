import React, { Component } from 'react'
import { Button, Keyboard, View, Text } from 'react-native'
import EditJrnl from '../components/EditJrnl'

export default class EditJrnlScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation

    handlePress = () => {
      Keyboard.dismiss()
      goBack()
    }

    return {
      title: 'Edit Jrnl',
      headerRight: <Button title="Save" onPress={handlePress}/>
    }
  }

  render(){
    return (
      <EditJrnl/>
    )
  }

}
