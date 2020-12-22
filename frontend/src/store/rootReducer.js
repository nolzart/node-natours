import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import tourReducer from './reducers/tourReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tour: tourReducer,
});

export default rootReducer;
