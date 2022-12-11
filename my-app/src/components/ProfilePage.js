// PROFILE PAGE, LINH

import React from 'react'; //import React library
import { ProfileGallery } from './ProfileGallery.js';
import { ProfilePicture } from './ProfilePicture.js';

export function ProfilePage(props) {
    const currentUser = {imgProfile: "../img/profile-pic.png", userName: "Jane Doe", location:"Seattle, WA", bio:""}
    return (
        <div className="all-body">
            {/* <div className="comparison-body"> */}
                <header>
                    <h1 className="project-name">update your profile :)</h1>
                </header>
                <div class="profile-section">
                    <ProfileGallery/>
                    <ProfilePicture currentUser={currentUser}/>
                </div>
            {/* </div> */}
        </div>
    )
}