import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, NavigationActions } from 'react-native'
import CreateJrnlContainer from '../containers/CreateJrnlContainer'
import JrnlListContainer from '../containers/JrnlListContainer'

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
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <CreateJrnlContainer navigator={navigate}/>
        <JrnlListContainer/>
      </View>
    )
  }
}
