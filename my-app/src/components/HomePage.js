// HOME PAGE, CINDY
import React from 'react'; //import React library]
import {useState} from 'react';
import { CardGrid } from './CardGrid.js';
import { Button } from './Button.js';
import { ToggleButton } from './ToggleButton.js';

export function HomePage(props) {

    // state for what we are filtering for
    const [selectedFilter, updateSelectedFilter] = useState("Name");    

    // state for the search bar input
    const [searchInput, updateSearchInput] = useState("");

    // state for temperature filter: lower temp selection
    const [selectedLowestTemp, updateSelectedLowestTemp] = useState(0);
     // state for temperature filter: higher temp selection
    const [selectedHighestTemp, updateSelectedHighestTemp] = useState(0);

    // data for plant cards, set as all plants in beg
    const [plantsDisplayed, updatePlantsDisplayed] = useState(props.plantsData);
    // let plantsData = props.plantsData;


    // FILTER (STATIC)
    // ----------------------------------------------------------------
    // this creates the dropdown selection for filter options
    const dataKeys = Object.keys(props.plantsData[0]);
    const filterOptions = dataKeys.map((currKey) => {
        if (currKey != "img" && currKey != "Scientific") {
            if (currKey === "low") {
                return <option key="Temperature" value="Temperature">Temperature</option>;
            }
            if (currKey === "high") {
                return;
            }
            return <option key={currKey} value={currKey}>{currKey}</option>;
        }
    });


    // TEMPERATURE DROPDOWN SELECT OPTIONS (STATIC)
    // update the page to show temperature selects with temperature options between the lowest and highest temperatures of all current plant options
        const allLowTemps = []; 
        props.plantsData.forEach((currPlant) => {
            allLowTemps.push(parseInt(currPlant["low"]));
        });
        const lowest = Math.min(...allLowTemps);

        const allHighTemps = []; 
        props.plantsData.forEach((currPlant) => {
            allHighTemps.push(parseInt(currPlant["high"]));
        });
        const highest = Math.max(...allHighTemps);

        // doesn't change because database does not change
        const TEMP_OPTIONS = [];
        for (var i = lowest; i <= highest; i++) {
            TEMP_OPTIONS.push(
                <option key={i} value={i}>{i}</option>
            );
        }


    // updates what filter INPUT options to display
    // (temperature required dropdown while everything else is a type in search)
    // is a search bar at default, then updates to dropdown if temperature filter is selected
    const handleChangeFilter = (event) => {
        event.preventDefault();
        const tempSelectedFilter = event.target.value;
        updateSelectedFilter(tempSelectedFilter);
        
        if (tempSelectedFilter === "Temperature") {
            document.querySelector("#searchBar").style.display = "none";
            document.querySelector("#tempDropdowns").style.display = "block";
        } else {
            document.querySelector("#searchBar").style.display = "block";
            document.querySelector("#tempDropdowns").style.display = "none";
        }
        console.log("handleChangeFilter")
        handleUserInput(tempSelectedFilter);

    }

    const handleUserInput = (currFilter) => {
        console.log("handleUserInput")
        // filters plant cards to fit updates state filters
        let plantsData = [];
        updateSearchInput(document.querySelector("#searchBar").value);
        const search = document.querySelector("#searchBar").value;

        updateSelectedLowestTemp(document.querySelector("#filterLowTemp").value);
        const l_temp = document.querySelector("#filterLowTemp").value;

        updateSelectedHighestTemp(document.querySelector("#filterHighTemp").value);
        const h_temp = document.querySelector("#filterHighTemp").value;

        if (search != "" && currFilter != "Temperature") {
            plantsData = props.plantsData.filter((currPlant) => {
                const currPlantData = currPlant[currFilter];
                if (currFilter === "Color" || currFilter === "Native") {
                    for (let i = 0; i < currPlantData.length; i++) {
                        if (currPlantData[i].toUpperCase() === (search.toUpperCase())) {
                            return currPlant;
                        }
                    }
                } else {
                    if (currPlantData.toUpperCase().indexOf(search.toUpperCase()) == 0) {
                        return currPlant;
                    }
                }
            });
        } else if (currFilter === "Temperature") {
            if (l_temp > h_temp) {
                plantsData = "";
            } else {
                plantsData = props.plantsData.filter((currPlant) => {
                    const currPlantLowTemp = currPlant["low"];
                    const currPlantHighTemp = currPlant["high"];
                    if (l_temp <= currPlantLowTemp && currPlantHighTemp <= h_temp) {
                        return currPlant;
                    }
                });
            }
        }
        updatePlantsDisplayed(plantsData);
    }


    // resetting all filters when the clear button is clicked
    const handleClearReset = (event) => {
        event.preventDefault();
        updateSelectedFilter("Name");
        document.querySelector("#searchBar").style.display = "block";
        document.querySelector("#tempDropdowns").style.display = "none";

        document.querySelector("#searchBar").value = "";
        updateSearchInput("");
        document.querySelector("#filterLowTemp").value = "";
        updateSelectedLowestTemp(0);
        document.querySelector("#filterHighTemp").value = "";
        updateSelectedHighestTemp(0);

        updatePlantsDisplayed(props.plantsData)
        
    }


    return (
        <div className="all-body">
            <div className="home-body">
                <header>
                    <h1 className="project-name">plant parenthood</h1>
                </header>
                <div className="filters">
                    <h2 className="tagline">here are your current plants!</h2>                    

                    <form>
                        <label className="filter-container" htmlFor="searchBar">Filter for plants based on         
                        <select className="form-input" value={selectedFilter} aria-label="dropdown select of ways you can filter the plant cards"
                            onChange={(event) => handleChangeFilter(event)}>
                            {filterOptions}
                        </select>
                        :
                        <input id="searchBar" className="input" value={searchInput} type="text" placeholder="Search here"
                            aria-label="text search bar to be used to search for plants based on the filter chosen" onChange={() => handleUserInput(selectedFilter)}/>

                        <div id="tempDropdowns" aria-label="a dropdown select pair of the lowest and highest temperature to filter plants by">
                            <select className="form-input" value={selectedLowestTemp} id="filterLowTemp"
                                aria-label="dropdown select for lower temperature" onChange={() => handleUserInput(selectedFilter)}>
                                {TEMP_OPTIONS}
                            </select>
                            to
                            <select className="form-input" value={selectedHighestTemp} id="filterHighTemp"
                                aria-label="dropdown select for higher temperature" onChange={() => handleUserInput(selectedFilter)}>                                {TEMP_OPTIONS}
                            </select>
                        </div>
                        <Button classStyle="allButtons" text="Clear!" handleClick={(event) => handleClearReset(event)}/>
                        </label>
                    </form>
                </div>
                <CardGrid plantsData={plantsDisplayed}/>
            </div>
        </div>
    )
}