// CARD COMPONENT, CINDY
import React from 'react'; //import React library


export function Card(props) {
    let colors = "";
    for (let i = 0; i < (props.plant.Color).length; i++) {
        colors += (props.plant.Color)[i] + ", ";
    }
    colors = colors.substring(0, colors.length - 2)

    let nativeContinents = "";
    for (let i = 0; i < (props.plant.Native).length; i++) {
        nativeContinents += (props.plant.Native)[i] + ", ";
    }
    nativeContinents = nativeContinents.substring(0, nativeContinents.length - 2)



    return (
        <div key={props.plant.Scientific} className="plant-card">
            <img src={props.plant.img} alt={props.plant.Name}/>
            <ul>
                <li key={props.plant.Scientific + ", 1"}>Name: <span className="cardSmallerText">{props.plant.Name}</span></li>
                <li key={props.plant.Scientific + ", 2"}>Scientific: <span className="cardSmallerText">{props.plant.Scientific}</span></li>
                <li key={props.plant.Scientific + ", 3"}>Temp Range (°C): <span className="cardSmallerText">{props.plant.low + " - " + props.plant.high}</span></li>
                <li key={props.plant.Scientific + ", 4"}>Common Colors: <span className="cardSmallerText">{colors}</span></li>

                <li key={props.plant.Scientific + ", 5"}>Native Region: <span className="cardSmallerText">{nativeContinents}</span></li>
            </ul>
        </div>
    )
}