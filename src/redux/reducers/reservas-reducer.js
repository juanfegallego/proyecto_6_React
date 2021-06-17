import {ADD_BOOKINGS} from '../type';

const initialState = {
    userBooking: []
};

const userBookingReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOKINGS :
            return action.payload;
        
        
        default : 
            return state
    }
}

export default userBookingReducer;