import React, { Component } from 'react'
import { Button, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'
import NewJrnl from '../components/NewJrnl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



export default class NewJrnlScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation

    handlePress = () => {
      Keyboard.dismiss()
      goBack()
    }


    return {
      title: 'Create New Jrnl',
      headerRight: <Button title="Save" onPress={handlePress}/>
    }
  }

  render(){
    return (
      <NewJrnl/>
    )
  }
}
