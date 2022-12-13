import React from 'react'; //import React library
import { ProfileGallery } from './ProfileGallery.js';
import { ProfilePicture } from './ProfilePicture.js';

export function ProfilePage(props) {
    const currentUser = props.currentUser;
    return (
        <div className="all-body">
            {/* <div className="comparison-body"> */}
                <header>
                    <h1 className="project-name">Update your profile :)</h1>
                </header>
                <div className="profile-section">
                    <ProfileGallery currentUser={currentUser}/>
                    <ProfilePicture currentUser={currentUser}/>
                </div>
            {/* </div> */}
        </div>
    )
}