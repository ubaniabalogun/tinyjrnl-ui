import React, { Component } from 'react'
import HomeScreen from './containers/HomeScreen'
import { StackNavigator } from 'react-navigation'



const App = StackNavigator({
  Home: { screen: HomeScreen }
})

export default App
