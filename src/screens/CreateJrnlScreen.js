import React, { Component } from 'react'
import { View, Text, TextInput , StyleSheet } from 'react-native'
import { Label } from '../components/Label'
import JrnlTextInput from '../components/JrnlTextInput'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  }
})

export default class CreateJrnlScreen extends Component {
  static navigationOptions = {
    title: 'Create new Jrnl'
  }

  render(){
    return (
      <View style={styles.container}>
        <Label name="Name"/>
        <JrnlTextInput/>
        <Label name="Tags"/>
        <JrnlTextInput/>
        <Label name="Default Increment" />
        <JrnlTextInput/>
      </View>

    )
  }
}
