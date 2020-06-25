import { SET_CURRENT_USER } from '../actions/userActions'

export default function userReducer(state = null, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.user
    default:
      return state
  }
}