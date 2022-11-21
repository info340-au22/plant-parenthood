// HOME PAGE, CINDY
import React from 'react'; //import React library]
import { CardGrid } from './CardGrid.js';
import { ToggleButton } from './ToggleButton.js';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';

export function HomePage(props) {
    return (
        <div>
            <header>
                <NavBar/>
                <h1 class="project-name">plant parenthood</h1>
            </header>
                    <div className="filters">
                <h2 className="tagline">here are your current plants!</h2>
                <div className="checkbox-container">
                    <ToggleButton filterName="favorites"/>
                    <ToggleButton filterName="isPlanted"/>
                    <ToggleButton filterName="isNotPlanted"/>
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" not-checked/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">favorites</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" not-checked/>
                        <label className="form-check-label" for="flexSwitchCheckChecked">planted</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" not-checked/>
                        <label className="form-check-label" for="flexSwitchCheckDisabled">not planted</label>
                    </div> */}
                </div>
            </div>
            <CardGrid plantsData={props.plantsData}/>
            <Footer/>
        </div>
    )
}