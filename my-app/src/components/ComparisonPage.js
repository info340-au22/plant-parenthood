// COMPARISON PAGE, ANNA
// need to make a comparedPlantCard js file to update cards once user searches and submits

import React from 'react'; //import React library
import TextBox from './TextBox.js'; 


export function ComparisonPage(props) {
    return (
        <div className="compare-plants d-lg-flex"> 

            <TextBox number={1} plantData={props.plantData} />

           {/* } <div className="compare illustration flex-item" aria-label="compare illustration"></div> */}

            <TextBox number={2} plantData={props.plantData} />
        </div>
    );
}