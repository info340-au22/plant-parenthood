
import React from 'react'; //import React library
import { useState } from 'react';
import { Button } from './Button.js';
import { ImageCards } from './ImageCards.js';
import { UploadPopup } from './UploadPopup.js';

export function ProfileGallery(props) {


    const [popUpElem, togglePopup] = useState(null)

    const openPopup = () => {
        togglePopup(<UploadPopup handleClose={closePopup} open="open-popup"/>);
    }

    const closePopup = () => {
        // add code to actually upload the image
        popUpElem.props.open = "";
    }

    return (
        <section className="gallery">
            <div className="gallery-heading">
                <h1>Image Gallery</h1>
                {popUpElem}
                <Button text="Upload" handleClick={openPopup}/>
            </div>
            <ImageCards/>
        </section>
    )
}

// FOR LINH: document.querySelector("Button").setAttribute(text, "Edit")