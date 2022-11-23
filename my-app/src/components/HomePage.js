// HOME PAGE, CINDY
import React from 'react'; //import React library]
import {useState} from 'react';
import { CardGrid } from './CardGrid.js';
import { Button } from './Button.js';
import { ToggleButton } from './ToggleButton.js';

export function HomePage(props) {

    const [searchInput, updateSearchInput] = useState("");
    const [selectedFilter, updateSelectedFilter] = useState("Name");


    let plantsData = props.plantsData;
    if (searchInput != "") {
        plantsData = props.plantsData.filter((currPlant) => {
            const currPlantData = currPlant[selectedFilter];

            console.log("currPlantData: " + currPlantData);
            // console.log(string.indexOf(substring) !== -1);
            // if (currPlantData.toUpperCase().includes(searchInput.toUpperCase())) {
            // if (selectedFilter == "Temperature") {
            //     // const dashIndexOfCurrPlant = currPlantData.indexOf("- ");
            //     // const dashIndexOfSearch = searchInput.indexOf("- ");
            //     // if (searchInput.charAt(0) == "-" && searchInput.charAt(0) != "-") {
            //     //     return;
            //     // }
            //     // if (currPlantData.subString(0, 2) == searchInput.subString(0, 2) || // check if the starting temp = search
            //     // currPlantData.subString(dashIndexOfCurrPlant) == searchInput.subString(dashIndexOfSearch)) { // check if the ending temp = search
            //     //     return currPlant;
            //     // }



            // } else 
            if (currPlantData.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1) {
                return currPlant;
            }
        });
    }

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        updateSearchInput(document.querySelector("#filterSearch").value);
    }

    const handleSearchEnter = (event) => {
        event.preventDefault();
    }
    
    const selectOptions = <input className="input" type="text" placeholder="Search here" id="filterSearch" onChange={(event) => handleSearchEnter(event)}/>;
    // if (selectedFilter == "Temperature") {
    //     selectOptions = 
    //         <select className="form-input" value={selectedFilter} onChange={(event) => updateSelectedFilter(event.target.value)}>
    //             for (let i = 0; i < ) {
    //             }
    //             dataKeys.map((currKey) => {
    //                 if (currKey != "img") {
    //                     return <option key={currKey} value={currKey}>{currKey}</option>;
    //                 }
    //             }
    //         </select>
    // }

    
    console.log("PLANTS DATA: " + plantsData + ", " + plantsData.length);

    const dataKeys = Object.keys(props.plantsData[0]);

    const filterOptions = dataKeys.map((currKey) => {
        if (currKey != "img") {
            return <option key={currKey} value={currKey}>{currKey}</option>;
        }
    });


    return (
        <div className="all-body">
            <div className="home-body">
                {/* <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"></link> */}
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
                            {selectOptions}
                        <Button text="Filter!" handleClick={handleFilterSubmit}/>
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