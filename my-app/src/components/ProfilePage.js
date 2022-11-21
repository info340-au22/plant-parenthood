// PROFILE PAGE, LINH

import React from 'react'; //import React library
import { ProfileGallery } from './ProfileGallery.js';
import { ProfilePicture } from './ProfilePicture.js';


export function ProfilePage(props) {
    return (
        <section className="profile-section">

            <ProfileGallery/>
            <ProfilePicture/>

        </section>
    )
}