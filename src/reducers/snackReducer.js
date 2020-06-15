export default function snackReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_SNACKS':
      return [...state, action.snacks]
      
    default:
      return state
  }
}