// COMPARISON PAGE, ANNA
// need to make a comparedPlantCard js file to update cards once user searches and submits

import React from 'react'; //import React library
import {TextBox} from './TextBox.js';
import {SubmitButton} from './SubmitButton.js';
import {Card} from './Card.js';


export function ComparisonPage(props) {
    return (
            <div className="compare-interface d-lg-flex"> 
                    <ComparisonContent />
                    <SimilarityInfo />
                    <ComparisonContent />
            </div>
        //  comment
        //  <TextBox number={1} plantData={props.plantData} />

        //  <div className="compare illustration flex-item" aria-label="compare illustration"></div> */}

        //  <TextBox number={2} plantData={props.plantData} />
        // </div> 
    );
}

function ComparisonContent(props) {
    return (
        <div className="compare-interface d-lg-flex"> 
            <div className="d-flex flex-column plant-container">
                <TextBox />
                <SubmitButton />
                <Card />
                {/* // add plant card */}
            </div>
        </div>
    );
}

function SimilarityInfo(props) {
    return (
        <div className="similarity-info"> 
            <p class="similar-info">Search up 2 plants let's compare them!</p>
        </div>
    );
}
