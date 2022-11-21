//UPLOAD POPUP

import React from 'react'; //import React library]


export function UploadPopup(props) {
    return (
        <div className={"popup " + props.open} id="popup">
            <img src="img/card-daisies.png" alt="flower decor"/>
            <h2>Upload Your Plant</h2>
            <p>some text</p>
            <form action="/action_page.php">
                <input type="file" id="myFile" name="filename"/>
                <button type="submit button" onClick={props.handleClose}>OK</button>
            </form>
        </div>
    )
}