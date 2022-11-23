// TEXT BOX, ANNA
import React from 'react'; //import React library
// need to import plant data
// need to make a comparedPlantCard js file to update cards once user searches and submits
import {useState} from 'react';
import { Button } from './Button.js';


export function ComparisonTextBox(props) {

    // plant data
    // const plantData = props.plantData;

    // plant compare number
    // const plantNumber = props.number;

    // state variables
    // const [text, setText] = useState('');
    // const [selectedPlant, setSelectedPlant] = useState(null);
    // const [comparedPlantData, setComparedPlantData] = useState({});
    // const [alertMessage, setAlertMessage] = useState(null);

    // event handler for plant name input
    // const changePlant = (event) => {
    // event.preventDefault();
    // setSelectedPlant(event.target.value);

    // event handler for plant search button
    // const searchPlant = (event) => {
    //     event.preventDefault();
    //     console.log('Test: Plant searched!');
    // }

    // test: it works
    function clickMe() {
        alert("You clicked me!");
      }

    // preventSubmit & and changeSelectedPlant 
    return (
        <div className="d-flex flex-column plant-container">
            <form class="form">
                <label >
                    Search a Plant 
                    <input className="input" type="text" name="plant" placeholder="search plant" />
                </label>
                <Button text="Find Plant" handleClick={clickMe} type="submit"/>
                
            </form>
            {/* <input
                type="text"
                value={props.value}
                onChange={event => console.log("value changed!")}
            /> */}
        </div>
    );
};
            
          {/*  <form onSubmit={preventSubmit} className="form" role="search bar" autocomplete="off">
                <label htmlFor={"plant " + plantNumber}></label>
                <input onChange={changeSelectedPlant} id={"plant " + plantNumber} type="search" class="form-control" placeholder={"Search Plant " + plantNumber} autocomplete="off"/>
            </form>

            {/* <ComparedPlantCard comparedPlantData={comparedPlantData}/> */}