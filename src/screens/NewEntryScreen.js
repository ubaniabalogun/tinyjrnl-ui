import React, { Component } from 'react'
import NewEntry from '../components/NewEntry'


export default class NewEntryScreen extends Component {

  static navigationOptions = {
    title: 'New Entry'
  }

  render(){
    return <NewEntry title="Bottles of Water" increment={1}/>
  }
}
