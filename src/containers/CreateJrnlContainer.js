import React, { Component } from 'react'
import { TouchableHighlight,
          Alert, StyleSheet,
          Text, View, FlatList,
          NavigationActions } from 'react-native'


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

  render(){

    return (
      <TouchableHighlight onPress={() => this.props.navigator('CreateJrnl')} style={styles.touchable}>
        <View>
          <CreateJrnlButton/>
        </View>
      </TouchableHighlight>
    )
  }
}
