import {combineReducers} from 'redux';
import credentials from './credential-reducer';
import userBooking from './reservas-reducer' 
import restaurants from './restaurant-reducer'

const rootReducer = combineReducers({
    credentials,
    userBooking,
    restaurants
});

export default rootReducer;