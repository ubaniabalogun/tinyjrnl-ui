import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import NewJrnlButton from '../components/NewJrnlButton'
import JrnlList from '../components/JrnlList'
import NewEntry from '../components/NewEntry'
import buildScreen from './factory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    justifyContent: 'center'
  }
})

function Screen(){
  return (
    <View style={styles.container}>
      <NewJrnlButton/>
      <JrnlList/>
      <NewEntry/>
    </View>
  )
}


export default buildScreen({title: 'My Jrnls', RootComponent: Screen })
