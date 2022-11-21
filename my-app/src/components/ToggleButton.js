// TOGGLE BUTTON, CINDY
import React from 'react'; //import React library

export function ToggleButton(props) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" not-checked/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.filterName}</label>
        </div>
    )
}