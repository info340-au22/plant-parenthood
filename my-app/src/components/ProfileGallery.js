
import React from 'react'; //import React library
import { useState } from 'react';
import { Button } from './Button.js';
import { ImageCards } from './ImageCards.js';
import { UploadPopup } from './UploadPopup.js';
import OutsideClickHandler from 'react-outside-click-handler';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
  } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export function ProfileGallery(props) {
    const currentUser = props.currentUser;
    console.log(currentUser.userID);
    const uploadFile = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return alert("Please upload an image file!");
        const storageRef = ref(storage, `images/${currentUser.userID}/${file.name + v4()}`);
        uploadBytesResumable(storageRef, file).then(alert("You have uploaded your plant!"));
    }


    const [popUpElem, togglePopup] = useState(null)

    const openPopup = () => {
        togglePopup(<UploadPopup uploadFunction={uploadFile} handleClose={closePopup} open="open-popup"/>);
    }

    const closePopup = () => {
        // add code to actually upload the image
        togglePopup(<UploadPopup uploadFunction={uploadFile} close="close-popup" action="/Profile"/>)
    }

    return (
        <section className="gallery">
            <div>
                <h1>Image Gallery</h1>
                {popUpElem}
                <Button classStyle="allButtons gallery-heading" text="Upload" handleClick={openPopup}/>
                <OutsideClickHandler onOutsideClick={closePopup}>
                    {popUpElem}
                </OutsideClickHandler> 
            </div>
            <ImageCards currentUser={currentUser}/>
        </section>
    )
}

