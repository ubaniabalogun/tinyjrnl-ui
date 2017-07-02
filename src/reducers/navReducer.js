import { AppNavigator } from '../navigators'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))

export default function nav(state = initialState, action ){
  const nextState = AppNavigator.router.getStateForAction(action,state)
  return nextState || state
}
