
import React from 'react'; //import React library

import { UploadImageButton } from './UploadImageButton.js';
import { ImageCards } from './ImageCards.js';

export function ProfileGallery(props) {

    return (
        <section className="gallery">
            <div className="gallery-heading">
                <h1>Image Gallery</h1>
                <UploadImageButton/>
            </div>
            <ImageCards/>
        </section>
    )
}