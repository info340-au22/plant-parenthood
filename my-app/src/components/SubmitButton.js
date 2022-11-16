// SUBMIT BUTTON, ANNA
// i think this needs to be combined with textbox cuz the save button on profile is not the same as this??

import React from 'react'; //import React library
import TextBox from './TextBox.js'; 

export function SubmitButton(props) {

    // event handler for plant search button
    const searchPlant = (event) => {
        event.preventDefault();
        console.log('Test: Plant searched!');
    }

    return (
        <div>
             <button onClick={searchPlant} className="find-plant btn btn-primary" type="submit">
                Find Plant
            </button>
        </div>
    )
}