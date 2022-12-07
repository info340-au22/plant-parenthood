// TEXT BOX, ANNA
import React from 'react'; //import React library
import {useState} from 'react';
import {HomePage} from './HomePage.js';
import {Button} from './Button.js';
import {Card} from './Card.js';
import {CardGrid} from './CardGrid.js';


export function ComparisonTextBox(props) {

    // data for plant cards, set as all plants in beg
    let plantsData = props.plantsData;

    // state for the search bar input
    const [searchInput, updateSearchInput] = useState("");
    const [comparedPlantData, setComparedPlantData] = useState({});

    // event handler for plant search button
    const searchPlant = (event) => {
        event.preventDefault();
        updateSearchInput(event.target.value);
    }

    // USER INPUT.. i thnk this part is wrong lol its supposed to update data from database
    let userInputElem = <input className="input" value={searchInput} type="text" placeholder="Search plant" id="filterSearch" 
    onChange={(event) => updateSearchInput(event.target.value)}/>;//</input>/handleFilterSubmit(event)}/>;
    

    // preventSubmit & and changeSelectedPlant 
    return (
        <div className="d-flex flex-column plant-container">
            <form className="form">
                <label >
                    Search a Plant 
                    <input onChange={userInputElem} className="input" type="search" name="plant" placeholder="search plant" autoComplete="off" />
                </label>
                {/* <Button onClick={userInputElem} text="Find Plant" type="submit"/>  */}
            </form>
            {/* <Card plantsData={plantsData}/> */}
        </div>
    );
};
            


          {/*  <form onSubmit={preventSubmit} className="form" role="search bar" autocomplete="off">
                <label htmlFor={"plant " + plantNumber}></label>
                <input onChange={changeSelectedPlant} id={"plant " + plantNumber} type="search" class="form-control" placeholder={"Search Plant " + plantNumber} autocomplete="off"/>
            </form>

            {/* <ComparedPlantCard comparedPlantData={comparedPlantData}/> */}