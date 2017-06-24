import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    margin: 0,
    height: 40
  }
})



export default function JrnlTextInput({children, style}){
  return (
    <TextInput style={[styles.input, style]}>
    </TextInput>
  )
}
