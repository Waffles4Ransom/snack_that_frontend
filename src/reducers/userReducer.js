export default function userReducer(state = [], action) {
  switch(action.type) {
    case 'GET_USERS':
      return [...state.concat(action.users)]
    default:
      return state
  }
}