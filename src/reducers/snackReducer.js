import { GET_SNACKS, ADD_SNACK, REMOVE_SNACK } from '../actions/snackActions'

export default function snackReducer(state = [], action) {
  switch(action.type) {
    case GET_SNACKS:
      return [...state.concat(action.snacks)]
    case ADD_SNACK:
      return [...state.concat(action.snack)]  
    case REMOVE_SNACK:
      console.log(action.id)
      return [...state.filter(snack => snack.id !== action.id)]
    default:
      return state
  }
}