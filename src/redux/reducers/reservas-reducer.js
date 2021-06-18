import {ADD_BOOKINGS,CLEAR_BOOKINGS} from '../type';

const initialState = {
    userBooking: []
};

const userBookingReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOKINGS :
            return action.payload;

            
            case CLEAR_BOOKINGS:
                return initialState;
            
        
        
        default : 
            return state
    }
}

export default userBookingReducer;