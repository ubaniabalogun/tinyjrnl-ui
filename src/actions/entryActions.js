import * as types from './actionTypes'

export function startEntry(){
  return {
    type: types.START_NEW_ENTRY
  }
}

export function saveEntry(){
  return {
    type: types.SAVE_NEW_ENTRY
  }
}

export function cancelEntry(){
  return {
    type: types.CANCEL_NEW_ENTRY
  }
}
