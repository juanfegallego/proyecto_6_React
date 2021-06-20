
import React from 'react';
import "./Restaurants.css";
import { useHistory } from 'react-router';


const Restaurants = (props) => {

    let history = useHistory();
    const takeMe = (were) => {
        history.push(were);
    };

    return (
        <div className="bodyRest">
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/llebeig.jpg" alt="Llebeig" />
                <div className="textRest">
                    <h1><b>Llebeig</b></h1>
                    <p>Mediterráneo</p>
                    <p>Passeig de l'Albereda, 48, 46023 Valencia, Valencia</p>
                    
                </div>


            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/lia.jpeg" alt="Lia" />
                <div className="textRest">
                    <h1><b>LIA</b></h1>
                    <p>Mediterráneo</p>
                    <p>Carrer de la Boatella, 5, 46001 Valencia, Valencia</p>
                </div>

            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/lienzo.jpg" alt="Lienzo" />
                <div className="textRest">
                    <h1><b>Lienzo</b></h1>
                    <p>Gastronomico</p>
                    <p>Plaça de Tetuán, 18, 46003 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/partiggiano.png" alt="partiggiano" />
                <div className="textRest">
                    <h1><b>Partiggiano</b></h1>
                    <p>Italiano</p>
                    <p>Passeig de l'Albereda, 10, 46010 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/saona.jpg" alt="saona" />
                <div className="textRest">
                    <h1><b>Saona</b></h1>
                    <p>Mediterráneo</p>
                    <p>Carrer de Martínez Cubells, 7, 46002 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/circo.jpg" alt="circo" />
                <div className="textRest">
                    <h1><b>Circo</b></h1>
                    <p>Americano</p>
                    <p>Gran Via del Marqués del Túria, 25, 46005 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/laMordidita.jpg" alt="LaMordidita" />
                <div className="textRest">
                    <h1><b>La Mordidita</b></h1>
                    <p>Mexicano</p>
                    <p>Calle del Mar, 18, 46003 Valencia, Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/voltereta.jpg" alt="Voltereta" />
                <div className="textRest">
                    <h1><b>voltereta | manhattan</b></h1>
                    <p>Gastronomico</p>
                    <p>Carrer d'Isabel la Catòlica, 11, 46004 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/vaqueta.jpg" alt="vaqueta" />
                <div className="textRest">
                    <h1><b>Vaqueta</b></h1>
                    <p>Mediterráneo</p>
                    <p>Carrer de Sant Ferran, 22, 46001 Valencia, Valencia</p>
                </div>
            </div>
            <div className="cardRest">
                <img className="imgRest" src="https://raw.githubusercontent.com/juanfegallego/proyecto_5_mongoose-GitFlow/develop/img/laSastreria.png" alt="LaSastreria" />
                <div className="textRest">
                    <h1><b>La Sastreria</b></h1>
                    <p>Mediterráneo</p>
                    <p>Carrer de Josep Benlliure, 42, 46011 Valencia, Valencia</p>
                </div>
            </div>

        </div>
        
    )
}

export default Restaurants;

