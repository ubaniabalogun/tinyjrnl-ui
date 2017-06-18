import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CreateJrnlContainer from './CreateJrnlContainer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Jrnls'
  }

  render(){
    return (
      <View style={styles.container}>
        <CreateJrnlContainer/>
      </View>
    )
  }
}
