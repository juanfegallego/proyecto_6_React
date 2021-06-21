import {REST} from '../type';

const initialState = {
    restaurants: []
};

const restaurantReducer = (state = initialState, action) => {
    switch(action.type){
        case REST :
            return action.payload;

        default : 
            return state
    }
}

export default restaurantReducer;