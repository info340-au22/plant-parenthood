import React from 'react'; //import React library

export function Button(props) {
    return (
        <button type="button" className={props.classStyle} onClick={(event) => props.handleClick(event)}>{props.text}</button>
    )
}