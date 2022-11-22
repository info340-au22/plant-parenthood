// CARD GRID COMPONENT, CINDY
import React from 'react'; //import React library
import {Card} from './Card.js';

export function CardGrid(props) {
    const plantsData = props.plantsData;
    let allPlants = "";
    if (plantsData.length > 0) {
        allPlants = plantsData.map((currCard) => {
            const elem = <Card key={currCard.scientificName} name={currCard.name} scientificName={currCard.scientificName} temperature={currCard.temperature} img={currCard.img} favorite={currCard.favorite} planted={currCard.planted}/>;
            return elem;
        });
    } else {
        allPlants = <p>no plants matching that filter! yet :0</p>;
    }
    return (
        <div key="cardGrid" className="cards-container">
            {allPlants}
        </div>
    )
}