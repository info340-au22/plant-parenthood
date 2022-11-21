// TEXT BOX, ANNA
import React from 'react'; //import React library
// need to import plant data
// need to make a comparedPlantCard js file to update cards once user searches and submits
import {useState} from 'react';



export function TextBox(props) {

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

    // test: it works
    function clickMe() {
        alert("You clicked me!");
      }

    // preventSubmit & and changeSelectedPlant 
    return (
        <div className="d-flex flex-column plant-container">
            <form>
                <label className>
                    Search a Plant 
                    <input className="input" type="text" name="plant" placeholder="search plant" />
                </label>
                {/* WE SHOULD PROB DELETE SUBMIT BUTTON JS? IT CAN JUST BE IN SAME FILE AS TEXTBOX */}
                <button onClick={clickMe} className="find-plant-btn btn-primary" type="submit">
                Find Plant
                </button> 
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