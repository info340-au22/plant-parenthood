// HOME PAGE, CINDY
/*import React from 'react'; //import React library]
import {useState} from 'react';
import { CardGrid } from './CardGrid.js';
import { Button } from './Button.js';
import { ToggleButton } from './ToggleButton.js';

export function HomePage(props) {

    // state for what we are filtering for
    const [selectedFilter, updateSelectedFilter] = useState("Name");

    // the type of input box (search or temp scroll select)', original is a search
    // const [inputElem, updateInputElem] = useState(<input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => handleInputSearch(event)}/>); // updateSearchInput(event.target.value)}/>);
    const [inputElem, updateInputElem] = useState(null);

    // state for the search bar input
    const [searchInput, updateSearchInput] = useState("");

    // state for temperature filter: lower temp selection
    const [selectedLowestTemp, updateSelectedLowestTemp] = useState(0);
     // state for temperature filter: higher temp selection
    const [selectedHighestTemp, updateSelectedHighestTemp] = useState(0);

    // data for plant cards, set as all plants in beg
    let plantsData = props.plantsData;
    
    

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
        // handleChosenFilterType();
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
    // let userInputElem = <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => updateSearchInput(event.target.value)}/>;//</input>/handleFilterSubmit(event)}/>;
    
    

    const handleChosenFilterType = (event) => {
        updateSelectedFilter(event.target.value);
        const tempSelectedFilter = event.target.value;
        // change the elem variable to a usestate

        

            let tempOptions = [];
        // update the page to show temperature selects with temperature options between the lowest and highest temperatures of all current plant options
        if (tempSelectedFilter === "Temperature") {
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
            // userInputElem = 
            updateInputElem(
                <div>
                    <select className="form-input" name={selectedLowestTemp} value={selectedLowestTemp} id="filterLowTemp" onChange={(event) => event.preventDefault()}>
                        {tempOptions}
                    </select>
                    to
                    <select className="form-input" name={selectedHighestTemp} value={selectedHighestTemp} id="filterHighTemp" onChange={(event) => event.preventDefault()}>
                        {tempOptions}
                    </select>
                </div>);
                        
                
        } else {
            updateInputElem(
                // <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => handleInputSearch(event)}/>
                <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => {
                    event.preventDefault()
                    console.log("here")
                }}/>

                // <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => updateSearchInput(event.target.value)}/>
                // AUTOMCOMPLETE=ON???
            );
        }

        
    }





    const handleInputSearch = () => {
        // filters plant cards to fit updates state filters
        
        

        // if (selectedFilter === "Temperature") {
        //     if (selectedLowestTemp > selectedHighestTemp) {
        //         plantsData = "";
        //     } else {
        //         plantsData = props.plantsData.filter((currPlant) => {
        //             const currPlantLowTemp = currPlant["low"];
        //             const currPlantHighTemp = currPlant["high"];
        //             if (selectedLowestTemp <= currPlantLowTemp && currPlantHighTemp <= selectedHighestTemp) {
        //                 return currPlant;
        //             }
        //         });
        //     }
        // let currTarget = "";// event.target.value;
        // if (selectedFilter != "Temperature") {
        //     currTarget = document.querySelector("#filterSearch")
        // }
        // let tempSearchInput = currTarget.value;// event.target.value;
        // console.log("here")
        // console.log(event.target)
        // console.log(tempSearchInput)
        if (selectedFilter === "Temperature") {
            console.log("IOU4LEJRKNSFM,DE")
            let tempLow = selectedLowestTemp;
            let tempHigh = selectedHighestTemp;

            // if (event.target.id == "filterLowTemp") {
                // value of curr low selected
                updateSelectedLowestTemp(parseInt(document.querySelector("#filterLowTemp").value));
                tempLow = parseInt(document.querySelector("#filterLowTemp").value);//tempSearchInput);
            // } else if (event.target.id == "filterHighTemp") {
                // value of curr high selected
                updateSelectedHighestTemp(parseInt(document.querySelector("#filterHighTemp").value));
                tempHigh = parseInt(document.querySelector("#filterHighTemp").value);//tempSearchInput);
            // }
            console.log("selected filter = temp")
            if (tempLow > tempHigh) {
                plantsData = "";
            } else {
                plantsData = props.plantsData.filter((currPlant) => {
                    const currPlantLowTemp = currPlant["low"];
                    const currPlantHighTemp = currPlant["high"];
                    if (tempLow <= currPlantLowTemp && currPlantHighTemp <= tempHigh) {
                        return currPlant;
                    }
                });
            }
        // } else if (searchInput != "" && selectedFilter != "Temperature") {
        // } else if (tempSearchInput != "" && selectedFilter != "Temperature") {
        } else if (document.querySelector("#filterSearch") != null && document.querySelector("#filterSearch").value != "" && selectedFilter != "Temperature") {
            console.log("not temp")
            plantsData = props.plantsData.filter((currPlant) => {
                const currPlantData = currPlant[selectedFilter];
                // if (currPlantData.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1) {
                // if (currPlantData.toUpperCase().indexOf(tempSearchInput.toUpperCase()) !== -1) {
                    if (currPlantData.toUpperCase().indexOf(document.querySelector("#filterSearch").value.toUpperCase()) !== -1) {
                    return currPlant;
                }
            });
        }
        
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
                            
                        <select className="form-input" value={selectedFilter} onChange={(event) => handleChosenFilterType(event)}>
                            {filterOptions}
                        </select>
                        :
                        {inputElem}
                        <Button text="Submit!" handleClick={() => handleInputSearch()}/>
                        </label>
                    </form>
                </div>
                <CardGrid plantsData={plantsData}/>
            </div>
        </div>
    )
}*/

// HOME PAGE, CINDY
import React from 'react'; //import React library]
import {useState} from 'react';
import { CardGrid } from './CardGrid.js';
import { Button } from './Button.js';
import { ToggleButton } from './ToggleButton.js';

export function HomePage(props) {

    // state for what we are filtering for
    const [selectedFilter, updateSelectedFilter] = useState("Name");
    // // hide temperature select because above default is set to Name filter
    // document.querySelector("#tempDropdowns").style.display = "none";
    

    // state for the search bar input
    const [searchInput, updateSearchInput] = useState("");

    // // search bar or temp dropdown
    // const [inputType, updateInputType] = useState({<input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch"/>})
    

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

    // let tempOptions = []; // move inside??????
    // update the page to show temperature selects with temperature options between the lowest and highest temperatures of all current plant options
    // if (value === "Temperature") {
        // let temporaryTempOptions = [];
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


        // updateTempOptions(temporaryTempOptions);
            
    // }

    

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

        // updateInputType(<input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => updateSearchInput(event.target.value)}/>)//</input>/handleFilterSubmit(event)}/>)
        // set to search by default
        // let tempInputType = <input className="input" value={searchInput} type="text" placeholder="Search here" id="filterSearch" onChange={(event) => updateSearchInput(event.target.value)}/>;//</input>/handleFilterSubmit(event)}/>;
        
        

        // updateInputType(tempInputType);

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
                    if (currPlantData.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
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
                            
                        <select className="form-input" value={selectedFilter} onChange={(event) => handleChangeFilter(event)}>
                            {/* updateSelectedFilter(event.target.value)}> */}
                            {filterOptions}
                        </select>
                        :
                        {/* {inputType} */}
                        <input id="searchBar" className="input" value={searchInput} type="text" placeholder="Search here"onChange={() => handleUserInput(selectedFilter)}/>
                        {/* ; updateSearchInput(event.target.value)}/> */}
                        <div id="tempDropdowns" >
                            <select className="form-input" value={selectedLowestTemp} id="filterLowTemp" onChange={() => handleUserInput(selectedFilter)}>
                            {/* updateSelectedLowestTemp(parseInt(event.target.value))}> */}
                                {TEMP_OPTIONS}
                            </select>
                            to
                            <select className="form-input" value={selectedHighestTemp} id="filterHighTemp" onChange={() => handleUserInput(selectedFilter)}>
                            {/* updateSelectedHighestTemp(parseInt(event.target.value))}> */}
                                {TEMP_OPTIONS}
                            </select>
                        </div>
                        <Button text="Clear!" handleClick={(event) => handleClearReset(event)}/>
                        </label>
                    </form>

                    {/* <ToggleButton filterName="Native to North America"/>
                    <ToggleButton filterName="isPlanted"/>
                    <ToggleButton filterName="isNotPlanted"/> */}

                </div>
                <CardGrid plantsData={plantsDisplayed}/>
            </div>
        </div>
    )
}