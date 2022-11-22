// CARD GRID COMPONENT, CINDY
import React from 'react'; //import React library
import {Card} from './Card.js';

export function CardGrid(props) {
    const plantsData = props.plantsData;
    const allPlants = plantsData.map((currCard) => {
        const elem = <Card key={currCard.scientificName} name={currCard.name} scientificName={currCard.scientificName} temperature={currCard.temperature} img={currCard.img}/>;
        return elem;
    });
    return (
        <div key="cardGrid" className="cards-container">
            {allPlants}
        </div>
    )
}