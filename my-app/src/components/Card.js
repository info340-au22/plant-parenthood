// CARD COMPONENT, CINDY
import React from 'react'; //import React library
import { FaHeart } from 'react-icons/fa';
import { TbPlant } from 'react-icons/tb';
import { TbPlantOff } from 'react-icons/tb';

export function Card(props) {
    let heart = <FaHeart size={30} className="heart"/>
    if (props.favorite == "false") {
        heart = "";
    }
    let plantedIcon = <TbPlant size={30}/>;
    if (props.planted == "false") {
        plantedIcon = <TbPlantOff size={30} color="#bfbfbf"/>;
    }

    return (
        <div className="plant-card">
            {/* <img src="./img/card-daisies.png" alt={props.name}/> */}
            <div className="cardFilterInfoIcons">
                {heart}
                {plantedIcon}
            </div>
            <img src={props.img} alt={props.name}/>
            {/* changed location to temp for now */}
            <p>{props.name + ", " + props.scientificName + ", " + props.temperature}</p>

        </div>
    )
}