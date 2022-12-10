// CARD COMPONENT, CINDY
import React from 'react'; //import React library
import { FaHeart } from 'react-icons/fa';
import { TbHeartOff } from 'react-icons/tb';
import { TbPlant } from 'react-icons/tb';
import { TbPlantOff } from 'react-icons/tb';

export function Card(props) {
    // let heart = <FaHeart size={30} className="heart"/>
    // if (props.favorite == "false") {
    //     heart = <TbHeartOff size={30} className="heart" color="#bfbfbf"/>
    // }
    // let plantedIcon = <TbPlant size={30}/>;
    // if (props.planted == "false") {
    //     plantedIcon = <TbPlantOff size={30} color="#bfbfbf"/>;
    // }

    // let colors = (props.plant.Color).map((currColor) => {
    //     return currColor;
    // });
    // console.log(String(props.plant.Color).split(' '))

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
            {/* <img src="./img/card-daisies.png" alt={props.name}/> */}
            {/* <div className="cardFilterInfoIcons">
                {heart}
                {plantedIcon}
            </div> */}
            <img src={props.plant.img} alt={props.plant.Name}/>
            {/* changed location to temp for now */}
            {/* <p> */}
            <ul>
                <li key={props.plant.Scientific + ", 1"}>Name: <span className="cardSmallerText">{props.plant.Name}</span></li>
                <li key={props.plant.Scientific + ", 2"}>Scientific: <span className="cardSmallerText">{props.plant.Scientific}</span></li>
                <li key={props.plant.Scientific + ", 3"}>Temp Range (°C): <span className="cardSmallerText">{props.plant.low + " - " + props.plant.high}</span></li>
                {/* <li key={props.plant.Scientific + ", 4"}>Common Colors: <span className="cardSmallerText">{(props.plant.Color).replace("[", "").replace("]", "")}</span></li> */}
                <li key={props.plant.Scientific + ", 4"}>Common Colors: <span className="cardSmallerText">{colors}</span></li>

                <li key={props.plant.Scientific + ", 5"}>Native Region: <span className="cardSmallerText">{nativeContinents}</span></li>
            </ul>
                {/* {props.name + ", " + props.scientificName + ", " + props.temperature} */}
            {/* </p> */}

        </div>
    )
}