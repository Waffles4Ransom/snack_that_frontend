import { GET_SNACKS, ADD_SNACK, REMOVE_SNACK } from '../actions/snackActions'

export default function snackReducer(state = [], action) {
  switch(action.type) {
    case GET_SNACKS:
      return [...state.concat(action.snacks)]
    case ADD_SNACK:
      let newArr = state.slice()
      newArr.splice(0, 0, action.snack)
      return newArr
    case REMOVE_SNACK:
      return [...state.filter(snack => snack.id !== action.id)]
    default:
      return state
  }
}