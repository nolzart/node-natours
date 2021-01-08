import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tourReducer from './tourReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tour: tourReducer,
});

export default rootReducer;
