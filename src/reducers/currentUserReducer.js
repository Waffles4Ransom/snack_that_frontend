export default function userReducer(state = null, action) {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      console.log(action)
      return action.user
    default:
      return state
  }
}