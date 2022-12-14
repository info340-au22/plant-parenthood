import React from 'react'; //import React library
import {useState} from 'react';
import {CardGrid} from './CardGrid.js';
import {Button} from './Button.js';



export function ComparisonPage(props) {

    const [similarityInfo, updateSimilarityInfo] = useState(<pre className="similar-info">Search up 2 plants, let's compare them!</pre>);    const [card1Plant, updateCard1Plant] = useState("");
    const [card2Plant, updateCard2Plant] = useState("");

    const handleChange = (event, plantCardName, cardNum) => {
        event.preventDefault();
        const currCardInfo = plantCardName;
        // since useState variable is not updated until end of this function,
        // use these within function for updated data
        let updatedPlant1 = card1Plant;
        let updatedPlant2 = card2Plant;

        if (cardNum == "card1") {
            updateCard1Plant(currCardInfo);
            updatedPlant1 = currCardInfo;
        } else {
            updateCard2Plant(currCardInfo);
            updatedPlant2 = currCardInfo;
        }

        // check if there even is an input
        if (updatedPlant1 != "" && updatedPlant2 != "") {
            const plant1 = props.plantsData.filter((currPlant) => {
                const currPlantName = currPlant["Name"];
                if (currPlantName.toUpperCase() === updatedPlant1.toUpperCase()) {
                    return currPlant;
                }
            })[0];

            const plant2 = props.plantsData.filter((currPlant) => {
                const currPlantName = currPlant["Name"];
                if (currPlantName.toUpperCase() === updatedPlant2.toUpperCase()) {
                    return currPlant;
                }
            })[0];

            // check for invalid inputs
            if (plant1 == null) {
                updateSimilarityInfo("please retry searching up your 1st plant!");
            } else if (plant2 == null) {
                updateSimilarityInfo("please retry searching up your 2nd plant!");
            }

            
            const dataKeys = Object.keys(props.plantsData[0]);

            let similarity = {}
            dataKeys.filter((currKey) => {
                if (currKey != "img") {
                    if (currKey == "Color" || currKey == "Native") {
                        let similar = [];
                        for (let i = 0; i < plant1[currKey].length; i++) {
                            for (let j = 0; j < plant2[currKey].length; j++) {
                                if (plant1[currKey][i].toUpperCase() === plant2[currKey][j].toUpperCase()) {
                                    similar.push(" " + plant1[currKey][i])
                                }
                            }
                        }
                        if (similar.length > 0) {
                            similarity["Common " + currKey] = similar
                        }
                    } else if (plant1[currKey].toUpperCase() === (plant2[currKey].toUpperCase())) {
                        similarity[currKey] = plant1[currKey]
                    }
                }
            });
            let similarityString = "";
            const allSimilarKeys = Object.keys(similarity);


            for (let i = 0; i < allSimilarKeys.length; i++) {
                similarityString += (allSimilarKeys)[i] + ": " + similarity[(allSimilarKeys)[i]] + "\n";
            }

            updateSimilarityInfo(<pre className="similar-info">{similarityString}</pre>);

        } else {
            if (updatedPlant1 === "" && cardNum != "card1") {
                updateSimilarityInfo("please try searching up a valid 1st plant!");
            } else if (updatedPlant2 === "" && cardNum != "card2") {
                updateSimilarityInfo("please try searching up a valid 2nd plant!");
            } else {
                updateSimilarityInfo("something went wrong, please try again!");
            }
        }

    }

    return (
        <div className="all-body">
            <div className="comparison-body">
                <header>
                    <h1 className="project-name">Find the similarities between 2 plants!</h1>
                </header>
                <div className="comparison-section">
                    {/* <div className="comparison-body"> */}
                        <div className="compare-interface d-lg-flex"> 
                            <ComparisonContent handleInvalidInput={updateSimilarityInfo} updateSimilarities={handleChange} plantsData={props.plantsData} columnNum="card1"/>
                            <SimilarityInfo similarities={similarityInfo}/>
                            <ComparisonContent handleInvalidInput={updateSimilarityInfo} updateSimilarities={handleChange} plantsData={props.plantsData} columnNum="card2"/>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

function ComparisonContent(props) {

    const defaultPlantInfo = [{"Name":"", "Scientific":"---", "low": "---", "high": "---", "img":"", "Color": "[]", "Native": "[]"}];
    return (
            <div className="compare-interface d-lg-flex"> 
                <div className="d-flex flex-column plant-container">
                    <ComparisonColumn handleInvalidInput={props.handleInvalidInput} plantsData={props.plantsData} searchInput={defaultPlantInfo} columnNum={props.columnNum} updateSimilarities={props.updateSimilarities}/>
                </div>
            </div>
    );
}

// moved comparision text box to this page
export function ComparisonColumn(props) {
    // data for plant cards, set as all plants in beg
    let plantsData = props.plantsData;

    // state for the search bar input
    const [searchInput, setSearchInput] = useState(props.searchInput[0].Name);
    const [cardInput, setCardInput] = useState(props.searchInput);


    // event handler for plant search
    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    const searchedPlant = (event) => {
        event.preventDefault();
        setSearchInput(document.getElementById(props.columnNum).value);//event.target.value);
        setCardInput((() => {
            if (document.getElementById(props.columnNum).value == "") {//event.target.value == "eg: ") {
                props.handleInvalidInput("sorry, that was an invalid plant name")
                plantsData = [];
            } else {
                plantsData = props.plantsData.filter((currPlant) => {
                    const currPlantData = currPlant["Name"];
                    if (currPlantData.toUpperCase() == document.getElementById(props.columnNum).value.toUpperCase()) {
                        return currPlant;
                    }
                });
            }
            return plantsData;
        }));
        props.updateSimilarities(event, document.getElementById(props.columnNum).value, props.columnNum);
    }

    return (
        <div className="d-flex flex-column plant-container">
            <form className="form">
                <label htmlFor={props.columnNum}>
                    Enter a Plant Name! 
                    <input id={props.columnNum} onChange={(event) => handleChange(event)} className="input" type="search" value={searchInput}
                        aria-label="text search bar to be used to search for plants based on name"
                        name="plant" placeholder="search plant" autoComplete="off" />
                </label>
                <Button handleClick={searchedPlant} text="Find Plant" classStyle="allButtons"/>
                <CardGrid plantsData={cardInput}/>
            </form>
        </div>
    );
}

function SimilarityInfo(props) {
    return (
        <div className="similarity-info"> 
           {props.similarities}
        </div>
    );
}