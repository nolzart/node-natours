import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tourReducer from './tourReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    tour: tourReducer,
    alert: alertReducer,
})

export default rootReducer
