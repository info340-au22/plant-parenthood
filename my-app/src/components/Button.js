import React from 'react'; //import React library

export function Button(props) {
    return (
        <button type="button" className={props.classStyle} onClick={props.handleClick}>{props.text}</button>
    )
}