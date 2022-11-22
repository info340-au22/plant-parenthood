// CARD COMPONENT, CINDY
import React from 'react'; //import React library

export function Card(props) {
    return (
        <div className="plant-card">
            {/* <img src="./img/card-daisies.png" alt={props.name}/> */}
            <img src={props.img} alt={props.name}/>
            {/* changed location to temp for now */}
            <p>{props.name + ", " + props.scientificName + ", " + props.temperature}</p>

        </div>
    )
}