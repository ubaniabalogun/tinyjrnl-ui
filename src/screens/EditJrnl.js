/*
Root component rendered by EditJrnlScreen
*/
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Label } from '../components/Label'
import buildScreen from './factory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  input: {
    fontSize: 20,
    margin: 0,
    height: 50
  }
})

function SaveButton({navigation}){
  const onPress = () => navigation.goBack()
  return (
    <Button title='Save' onPress={ onPress }/>
  )
}

function Screen(){
  return (
    <View style={styles.container}>
      <Label name="Name"/>
      <TextInput style={styles.input} autoFocus/>
      <Label name="Tags" />
      <TextInput style={styles.input}/>
      <Label name="Default Increment" />
      <TextInput style={styles.input} keyboardType='numeric'/>
    </View>
  )
}

export default buildScreen({title: 'Edit Jrnl', RootComponent: Screen, HeaderRight: SaveButton })
