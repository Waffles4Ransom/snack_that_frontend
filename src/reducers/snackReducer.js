import { GET_SNACKS, ADD_SNACK } from '../actions/snackActions'

export default function snackReducer(state = [], action) {
  switch(action.type) {
    case GET_SNACKS:
      return [...state.concat(action.snacks)]
    case ADD_SNACK:
      return [...state.concat(action.snack)]  
    default:
      return state
  }
}