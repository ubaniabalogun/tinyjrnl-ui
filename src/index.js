import React, { Component } from 'react'
import HomeScreen from './screens/HomeScreen'
import CreateJrnlScreen from './screens/CreateJrnlScreen'
import { StackNavigator } from 'react-navigation'



const App = StackNavigator({
  Home: { screen: HomeScreen },
  CreateJrnl: { screen: CreateJrnlScreen },

})

export default App
