import { combineReducers } from 'redux'
import snackReducer from './snackReducer'
import userReducer from './userReducer'
import currentUserReducer from './currentUserReducer'


const rootReducer = combineReducers({
  snacks: snackReducer,
  users: userReducer,
  currentUser: currentUserReducer
})

export default rootReducer