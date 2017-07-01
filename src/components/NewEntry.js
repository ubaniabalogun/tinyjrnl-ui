import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Modal } from 'react-native'

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

export default function NewEntry({title,increment}){
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <Text>{title}</Text>
      <TextInput>{increment}</TextInput>
    </Modal>
  )
}
