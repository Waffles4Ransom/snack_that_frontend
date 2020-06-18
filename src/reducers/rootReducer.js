import { combineReducers } from 'redux'
import snackReducer from './snackReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  snacks: snackReducer,
  users: userReducer
})

export default rootReducer