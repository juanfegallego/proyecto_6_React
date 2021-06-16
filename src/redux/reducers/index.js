import {combineReducers} from 'redux';
import credentials from './credential-reducer';
import characters from './reservas-reducer'

const rootReducer = combineReducers({
    credentials,
    characters
});

export default rootReducer;