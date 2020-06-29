import { GET_USERS, ADD_USER } from '../actions/userActions'

export default function userReducer(state = [], action) {
  switch(action.type) {
    case GET_USERS:
      return [...state.concat(action.users)]
    case ADD_USER:
      return [...state.concat(action.user)]
    default:
      return state
  }
}