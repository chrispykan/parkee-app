import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import tidbits from './tidbitReducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  tidbits
})

export default rootReducer
