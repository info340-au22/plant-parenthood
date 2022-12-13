//UPLOAD POPUP
import React from 'react'; //import React library

export function UploadPopup(props) {

  const uploadFile = props.uploadFunction;
  const handleChange = props.handleFunction;
      


    return (
        <div className={"popup " + props.open} id="popup">
            <img src="img/card-daisies.png" alt="flower decor" />
            <h2>Upload Your Pic</h2>
            <p> Must be an image file!</p>
            <form onSubmit={uploadFile}>
                <label htmlFor="popupInput" >
                  <input id="popupInput" type="file" name="file" accept="image/*" onChange={handleChange}/>
                </label>
                <button class="submit-button" onClick={props.handleClose}> Upload Image</button>
            </form>
        </div> 
    )
}