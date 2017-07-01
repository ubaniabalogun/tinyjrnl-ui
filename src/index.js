import React, { Component } from 'react'
import HomeScreen from './screens/HomeScreen'
import NewJrnlScreen from './screens/NewJrnlScreen'
import NewEntryScreen from './screens/NewEntryScreen'
import { StackNavigator } from 'react-navigation'



const App = StackNavigator({
  Home: { screen: HomeScreen },
  CreateJrnl: { screen: NewJrnlScreen }
  },
  {
  mode: 'modal'
})

export default App
