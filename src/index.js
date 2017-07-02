import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppReducer from './reducers'
import AppWithNavigationState from './navigators'

class TinyJrnlUI extends Component{
  store = createStore(AppReducer)

  render(){
    console.log(this.store.getState())
    let unsubscribe = this.store.subscribe(() => {
      console.log(this.store.getState())
    })
    return (
      <Provider store={this.store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}

export default TinyJrnlUI
