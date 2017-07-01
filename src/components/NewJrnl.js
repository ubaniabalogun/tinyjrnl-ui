import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Label } from './Label'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  input: {
    fontSize: 20,
    margin: 0,
    height: 50
  }
})

export default function NewJrnl(){
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
