// UPLOAD IMAGE BUTTON, LINH
import React from 'react'; //import React library

export function UploadImageButton(props) {
    return (
        <button className="uploadButton" onClick={props.handleClick}>Upload</button>
    )
}