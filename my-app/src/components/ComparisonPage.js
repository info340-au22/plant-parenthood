// COMPARISON PAGE, ANNA
// need to make a comparedPlantCard js file to update cards once user searches and submits

import React from 'react'; //import React library
import {useState} from 'react';
import {CardGrid} from './CardGrid.js';
import {Card} from './Card.js';
import {HomePage} from './HomePage.js';
import {Button} from './Button.js';
import { once } from 'lodash';



export function ComparisonPage(props) {

    return (
        <div className="all-body">
            <div className="comparison-body">
                <header>
                    <h1 className="project-name">compare 2 plants!</h1>
                </header>
                <div className="comparison-section">
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
    );
}

function ComparisonContent(props) {
    // maybe need to update this to new content??
    const placeholderPlantInfo = [{"name":"____", "scientificName":"____", "temperature": "____", "img":"/img/card-daisies.png", "Color": "[]", "Native": "[]"}]
    return (
            <div className="compare-interface d-lg-flex"> 
                <div className="d-flex flex-column plant-container">
                    <ComparisonTextBox plantsData={props.plantsData} />
                    <CardGrid plantsData={placeholderPlantInfo}/>
                    {/* // add plant card */}
                </div>
            </div>
    );
}

function SimilarityInfo(props) {
    // const plantsData = props.plantsData;s
    // const [similarInfo, setSimilarInfo] = useState();
    // // have 2 plants been searched, if so...
    // if ({ComparisonTextBox} != searched once??) {
    //     // get two cards and look at object attribute

    //     // if they're the same, add to a list using filter()
    //     if obj attribute = props.obj attribute.filter((currPlant) => {
    //         const currPlantData = currPlant[setSimilarInfo];
    // }
    return (
        <div className="similarity-info"> 
            <p className="similar-info">Search up 2 plants let's compare them!</p>
        </div>
    );
}

// moved comparision text box to this page
export function ComparisonTextBox(props) {

    // data for plant cards, set as all plants in beg
    const plantsData = props.plantsData;

    // state for the search bar input
    const [searchInput, setSearchInput] = useState("");

    // event handler for plant search 
    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    // event handler for plant search button.. i think this is where the problem is??
    const searchedPlant = (event) => {
        // props.applySearchCallback(searchInput);
        event.preventDefault();
        if (searchInput != "") {
            plantsData = props.plantsData.filter((currPlant) => {
                const currPlantData = currPlant[setSearchInput];
                if (currPlantData.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1) {
                    return currPlant;
                }
            });
        }
    }

    // USER INPUT.. i thnk this part is wrong lol its supposed to update data from database
    // let userInputElem = <input className="input" value={searchInput} type="text" placeholder="Search plant" id="filterSearch" 
    // onChange={(event) => setSearchInput(event.target.value)}/>;//</input>/handleFilterSubmit(event)}/>;
    // ^ dom element, delete line 89, work on line 100. make input controlled forms (use state for form, if state is xyz data, show xyz data. when user makes change in the form, it updates)
    // use separate function 

    // preventSubmit & and changeSelectedPlant 
    return (
        <div className="d-flex flex-column plant-container">
            <form className="form">
                <label >
                    Search a Plant 
                    <input onChange={handleChange} className="input" type="search" value={searchInput} name="plant" placeholder="search plant" autoComplete="off" />
                </label>
                {/* // pass data in here? */}
                <Button onClick={searchedPlant} text="Find Plant" type="submit"/> 
            </form>
            {/* <CardGrid plantsData={plantsData}/> */}
        </div>
    );
}
