import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import CreateJrnlContainer from './CreateJrnlContainer'
import JrnlListContainer from './JrnlListContainer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
        <JrnlListContainer/>
      </View>
    )
  }
}
