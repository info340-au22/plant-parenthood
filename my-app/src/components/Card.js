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

    return (
        <div className="plant-card">
            {/* <img src="./img/card-daisies.png" alt={props.name}/> */}
            {/* <div className="cardFilterInfoIcons">
                {heart}
                {plantedIcon}
            </div> */}
            <img src={props.plant.img} alt={props.plant.Name}/>
            {/* changed location to temp for now */}
            {/* <p> */}
            <ul>
                <li>Name:<span className="cardSmallerText"> {props.plant.Name}</span></li>
                <li>Scientific:<span className="cardSmallerText"> {props.plant.Scientific}</span></li>
                <li>Temperature (°C):<span className="cardSmallerText"> {props.plant.Temperature}</span></li>
            </ul>
                {/* {props.name + ", " + props.scientificName + ", " + props.temperature} */}
            {/* </p> */}

        </div>
    )
}