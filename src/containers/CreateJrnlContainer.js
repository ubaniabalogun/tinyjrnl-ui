import React, { Component } from 'react'
import { TouchableHighlight, Alert, StyleSheet, Text, View, FlatList } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  touchable: {
    display: 'flex',
    //flex: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50
  }
})

function CreateJrnlButton(){
  return (
      <Text style={styles.text}>
        Create New Jrnl
      </Text>
  )
}



export default class CreateJrnlContainer extends Component {

  handlePress(){
    Alert.alert('Create New Jrnl','This will create a new jrnl entry')
  }

  render(){
    return (
      <TouchableHighlight onPress={this.handlePress} style={styles.touchable}>
        <View>
          <CreateJrnlButton/>
        </View>
      </TouchableHighlight>
    )
  }
}
