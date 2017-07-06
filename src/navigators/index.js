import React, { Component } from 'react'
import PropTypes from 'prop-types'
import screens, { routeConfig } from '../screens'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

export const AppNavigator = StackNavigator(screens, routeConfig)

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
