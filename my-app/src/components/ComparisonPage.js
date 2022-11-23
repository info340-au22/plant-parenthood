// COMPARISON PAGE, ANNA
// need to make a comparedPlantCard js file to update cards once user searches and submits

import React from 'react'; //import React library
import {ComparisonTextBox} from './ComparisonTextBox.js';
import {CardGrid} from './CardGrid.js';


export function ComparisonPage(props) {
    return (

        <div className="all-body">
            <div className="comparison-body">
                <header>
                    <h1 className="project-name">compare 2 plants!</h1>
                </header>
                <div class="comparison-section">
                    {/* <div className="comparison-body"> */}
                        <div className="compare-interface d-lg-flex"> 
                            <ComparisonContent />
                            <SimilarityInfo />
                            <ComparisonContent />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>


        
        //  comment
        //  <TextBox number={1} plantData={props.plantData} />

        //  <div className="compare illustration flex-item" aria-label="compare illustration"></div> */}

        //  <TextBox number={2} plantData={props.plantData} />
        // </div> 
    );
}

function ComparisonContent(props) {
    const placeholderPlantInfo = [{"name":"____", "scientificName":"____", "temperature": "____", "img":"", "Color": "[]", "Native": "[]"}]
    return (
        
            <div className="compare-interface d-lg-flex"> 
                <div className="d-flex flex-column plant-container">
                    <ComparisonTextBox />
                    <CardGrid plantsData={placeholderPlantInfo}/>
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
