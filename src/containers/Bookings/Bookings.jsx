import React from 'react'
import { connect } from 'react-redux'

const Bookings = (props) => {
    console.log(props?.restaurants)
    return (
        
        
        <div>
            esto es bookings
        </div>
    )
}

export default connect((state) => ({ 
    restaurants:state.restaurants,
    
}))(Bookings);