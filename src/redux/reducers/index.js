import {combineReducers} from 'redux';
import credentials from './credential-reducer';
import userBooking from './reservas-reducer'

const rootReducer = combineReducers({
    credentials,
    userBooking
});

export default rootReducer;