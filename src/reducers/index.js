import { combineReducers } from 'redux'
import nav from './navReducer'
import jrnls from './jrnlListReducer'

const AppReducer = combineReducers({
  nav,
  jrnls
})

export default AppReducer
