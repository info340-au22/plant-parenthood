//UPLOAD POPUP

import { useState, useEffect } from 'react'; //import React library]

import {
    ref,
    uploadBytesResumable,
    getDownloadURL
  } from "firebase/storage";
  import { storage } from "./firebase";
  import { v4 } from "uuid";

  export function UploadPopup(props) {

  const uploadFile = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return alert("Please upload an image file!");
    const storageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytesResumable(storageRef, file);
    alert("You have uploaded your plant!")
  }



    return (
        <div className={"popup " + props.open} id="popup">
            <img src="img/card-daisies.png" alt="flower decor" />
            <h2>Upload Your Plant</h2>
            <p> Must be an image file!</p>
            <form onSubmit={uploadFile}>
                <input type="file" name="file" accept="image/*"/>
                <button type="submit button" onClick={props.handleClose}> Upload Image</button>
            </form>
        </div> 

    )
}