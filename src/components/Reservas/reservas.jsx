
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

const Reservas = (props) => {

    // const [characters, setCharacters] = useState(props?.characters);


    if(!props.characters[0]?.id){
        return (
            <div className="vistaDisplay">
                NO HAY NADA AUN
            </div>
        )
    }else{
        
        return (
            <div className="vistaDisplay">
                {props.characters[0].name}
            </div>
        )
    }
    
}

export default  connect((state)=>({characters:state.characters}))(Reservas);
