
import React from 'react'; //import React library
import { useState } from 'react';
import { Button } from './Button.js';
import { ImageCards } from './ImageCards.js';
import { UploadPopup } from './UploadPopup.js';
import OutsideClickHandler from 'react-outside-click-handler';

export function ProfileGallery(props) {


    const [popUpElem, togglePopup] = useState(null)

    const openPopup = () => {
        togglePopup(<UploadPopup handleClose={closePopup} open="open-popup"/>);
    }

    const closePopup = () => {
        // add code to actually upload the image
        togglePopup(<UploadPopup  close="close-popup" action="/Profile"/>)
    }

    return (
        <section className="gallery">
            <div className="gallery-heading">
                <h1>Image Gallery</h1>
                {popUpElem}
                <Button class="allButtons" text="Upload" handleClick={openPopup}/>
                <OutsideClickHandler onOutsideClick={closePopup}>
                {popUpElem}
                </OutsideClickHandler> 
            </div>
            <ImageCards/>
        </section>
    )
}

