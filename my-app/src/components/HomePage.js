// HOME PAGE, CINDY
import React from 'react'; //import React library]
import {useState} from 'react';
import { CardGrid } from './CardGrid.js';
import { Button } from './Button.js';
import { ToggleButton } from './ToggleButton.js';

export function HomePage(props) {

    const [searchInput, updateSearchInput] = useState([]);
    const [selectedFilter, updateSelectedFilter] = useState("name");

    let plantsData = props.plantsData;
    if (searchInput != "") {
        plantsData = props.plantsData.filter((currPlant) => {
            const currPlantData = currPlant[selectedFilter];
            if (currPlantData.toUpperCase().includes(searchInput.toUpperCase())) {
                return currPlant;
            }
        });
    }

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        updateSearchInput(document.querySelector("#filterSearch").value);
    }
    

    
    console.log("PLANTS DATA: " + plantsData + ", " + plantsData.length);

    const dataKeys = Object.keys(props.plantsData[0]);

    const filterOptions = dataKeys.map((currKey) => {
        return <option key={currKey} value={currKey}>{currKey}</option>;
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

                    <div className="checkbox-container">
                        <form>
                            
                            

                            <label>Filter for plants based on  
                                
                            <select className="form-input" value={selectedFilter} onChange={(event) => updateSelectedFilter(event.target.value)}>
                                {filterOptions}
                            </select>

                            :
                                <input className="input" type="text" placeholder="Search here" id="filterSearch"/>
                                <Button text="Filter!" handleClick={handleFilterSubmit}/>
                            </label>
                        </form>

                        {/* <ToggleButton filterName="Native to North America"/>
                        <ToggleButton filterName="isPlanted"/>
                        <ToggleButton filterName="isNotPlanted"/> */}

                        
                    </div>
                </div>
                <CardGrid plantsData={plantsData}/>
            </div>
        </div>
    )
}