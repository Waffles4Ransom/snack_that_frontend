import { GET_SNACKS } from '../actions/snackActions'

export default function snackReducer(state = [], action) {
  switch(action.type) {
    case GET_SNACKS:
      return [...state.concat(action.snacks)]
      
    default:
      return state
  }
}