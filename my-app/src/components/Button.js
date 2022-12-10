// UPLOAD IMAGE BUTTON, LINH
import React from 'react'; //import React library

export function Button(props) {
    return (
        <button type="button" className={props.class} onClick={(event) => props.onClick(event)}>{props.text}</button>
    )
}