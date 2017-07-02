import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, NavigationActions } from 'react-native'
import NewJrnlButton from '../components/NewJrnlButton'
import JrnlList from '../components/JrnlList'
import NewEntry from '../components/NewEntry'

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
        <NewJrnlButton/>
        <JrnlList/>
        <NewEntry/>
      </View>
    )
  }
}
