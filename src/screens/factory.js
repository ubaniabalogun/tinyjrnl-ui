import React, { Component } from 'react'
import { Button } from 'react-native'

export default function buildScreen({ title, HeaderRight = null, RootComponent }){

  class Screen extends Component {
    static navigationOptions = ( { navigation } ) => {
      return {
        title,
        headerRight: (HeaderRight? <HeaderRight navigation={ navigation }/>: null)
      }
    }

    render(){
      return (
        <RootComponent/>
      )
    }
  }

  return Screen
}
