import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeScreen from '../screens/HomeScreen'
import NewJrnlScreen from '../screens/NewJrnlScreen'
import NewEntryScreen from '../screens/NewEntryScreen'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    NewJrnl: { screen: NewJrnlScreen }
  },
  {
    mode: 'modal'
  }
)

function AppWithNavigationState({dispatch, nav}){
  return <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
