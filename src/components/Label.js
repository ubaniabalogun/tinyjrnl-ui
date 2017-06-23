import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  label: {
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 20

  }
})

export function Label({ name, style }){
  return (
    <View style={[styles.label,style]}>
      <Text>{name.toUpperCase()}:</Text>
    </View>
  )
}
