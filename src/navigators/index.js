import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeScreen from '../screens/HomeScreen'
import NewJrnlScreen from '../screens/NewJrnlScreen'
import EditJrnlScreen from '../screens/EditJrnlScreen'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'


const navigationOptions = {
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 20
  }
}

const stackConfig = {
  Home: {
    screen: HomeScreen
  },
  NewJrnl: {
    screen: NewJrnlScreen
  },
  EditJrnl: {
    screen: EditJrnlScreen
  }
}

const routeConfig = {
  mode: 'modal',
  navigationOptions
}

export const AppNavigator = StackNavigator(stackConfig, routeConfig)

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
