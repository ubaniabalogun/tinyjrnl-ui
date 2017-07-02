import { combineReducers } from 'redux'
import nav from './navReducer'
import jrnls from './jrnlListReducer'
import entryModal from './entryReducer'

const AppReducer = combineReducers({
  nav,
  jrnls,
  entryModal
})

export default AppReducer
