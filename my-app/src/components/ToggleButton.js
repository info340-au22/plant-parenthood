import React from 'react'; //import React library


export function ToggleButton(props) {
    return (
        <div className="form-check form-switch-elem">
            <input className="form-check-input-elem form-check-input-elem" type="checkbox" id="flexSwitchCheckDefault" not-checked="true"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.filterName}</label>
        </div>
    )
}