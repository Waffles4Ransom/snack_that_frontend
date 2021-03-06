import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from '../actions/userActions'

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.user
    case CLEAR_CURRENT_USER:
      return { message: 'logged out'}
    default:
      return state
  }
}