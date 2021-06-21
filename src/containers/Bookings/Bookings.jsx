import React from 'react'
import { connect } from 'react-redux'

const Bookings = (props) => {
    console.log(props?.restaurants[0])
    console.log(props?.credentials)

    if (props?.credentials.token === "") {
        return(
            <div>
                Necesitas estar logeado
            </div>
        )
        
    }

    return (
        
        
        <div>
            esto es bookings
        </div>
    )
}

export default connect((state) => ({ 
    restaurants:state.restaurants,
    credentials:state.credentials
    
}))(Bookings);