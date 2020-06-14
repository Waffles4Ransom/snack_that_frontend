import { combineReducers } from 'redux'
import snackReducer from './snackReducer'

const rootReducer = combineReducers({
  snacks: snackReducer
})

export default rootReducer