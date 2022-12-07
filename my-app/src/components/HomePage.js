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
    let plantsData = props.plantsData;
    
    // filters plant cards to fit updates state filters
    if (searchInput != "" && selectedFilter != "Temperature") {
        plantsData = props.plantsData.filter((currPlant) => {
            const currPlantData = currPlant[selectedFilter];
            if (currPlantData.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1) {
                return currPlant;
            }
        });
    } else if (selectedFilter === "Temperature") {
        if (selectedLowestTemp > selectedHighestTemp) {
            plantsData = "";
        } else {
            plantsData = props.plantsData.filter((currPlant) => {
                const currPlantLowTemp = currPlant["low"];
                const currPlantHighTemp = currPlant["high"];
                if (selectedLowestTemp <= currPlantLowTemp && currPlantHighTemp <= selectedHighestTemp) {
                    return currPlant;
                }
            });
        }
    }

    // resetting all filters when the clear button is clicked
    const handleClearReset = (event) => {
        event.preventDefault();
        updateSelectedFilter("Name");
        document.querySelector("#filterSearch").value = "";
        updateSearchInput("");
        document.querySelector("#filterLowTemp").value = "";
        updateSelectedLowestTemp(0);
        document.querySelector("#filterHighTemp").value = "";
        updateSelectedHighestTemp(0);
    }

    // FILTER
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

    // USER INPUT
    // ----------------------------------------------------------------
    // updates what filter INPUT options to display
    // (temperature required dropdown while everything else is a type in search)
    // is a search bar at default, then updates to dropdown if temperature filter is selected
    let userInputElem = <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => updateSearchInput(event.target.value)}/>;//</input>/handleFilterSubmit(event)}/>;
    
    let tempOptions = [];
    // update the page to show temperature selects with temperature options between the lowest and highest temperatures of all current plant options
    if (selectedFilter === "Temperature") {
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

        tempOptions = [];
        for (var i = lowest; i <= highest; i++) {
            tempOptions.push(
                <option key={i} value={i}>{i}</option>
            );
        }


        // the 2 dropdown temperature selection elements
        // must use parseInt() because otherwise evaluated as string and imcomparable
        userInputElem = 
            <div>
                <select className="form-input" value={selectedLowestTemp} id="filterLowTemp" onChange={(event) => updateSelectedLowestTemp(parseInt(event.target.value))}>
                    {tempOptions}
                </select>
                to
                <select className="form-input" value={selectedHighestTemp} id="filterHighTemp" onChange={(event) => updateSelectedHighestTemp(parseInt(event.target.value))}>
                    {tempOptions}
                </select>
            </div>
            
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
                        <label className="filter-container">Filter for plants based on  
                            
                        <select className="form-input" value={selectedFilter} onChange={(event) => updateSelectedFilter(event.target.value)}>
                            {filterOptions}
                        </select>
                        :
                        {userInputElem}
                        <Button text="Clear!" handleClick={(event) => handleClearReset(event)}/>
                        </label>
                    </form>

                    {/* <ToggleButton filterName="Native to North America"/>
                    <ToggleButton filterName="isPlanted"/>
                    <ToggleButton filterName="isNotPlanted"/> */}

                </div>
                <CardGrid plantsData={plantsData}/>
            </div>
        </div>
    )
}