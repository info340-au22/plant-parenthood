// CARD GRID COMPONENT, CINDY
import React from 'react'; //import React library
import {Card} from './Card.js';

export function CardGrid(props) {
    const plantsData = props.plantsData;
    let allPlants = "";
    if (plantsData.length > 0) {
        allPlants = plantsData.map((currCard) => {
            const elem = <Card plant={currCard}/>;
            return elem;
        });
    } else {
        allPlants = <p>no plants matching that filter! yet :0, maybe you put in invalid values??</p>;
    }
    return (
        <div key="cardGrid" className="cards-container">
            {allPlants}
        </div>
    )
}