import * as types from '../actions/actionTypes'

const initialState = {
  isVisible: false
}

export default function entryModal(state = initialState, action){
  switch(action.type){
    case types.START_NEW_ENTRY:
      return {...state, isVisible: true }
    case types.SAVE_NEW_ENTRY:
    case types.CANCEL_NEW_ENTRY:
      return {...state, isVisible: false }
    default:
      return state
  }
}
