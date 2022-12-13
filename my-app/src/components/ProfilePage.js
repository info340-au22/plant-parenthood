import React from 'react'; //import React library
import { ProfileGallery } from './ProfileGallery.js';
import { ProfilePicture } from './ProfilePicture.js';

export function ProfilePage(props) {
    const currentUser = props.currentUser;
    return (
        <div className="all-body">
                <header>
                    {currentUser.uid && 
                        <>
                            <h1 className="project-name">Update your profile :)</h1>
                        </>
                    }
                    {!currentUser.uid && 
                        <>
                            <h1 className="project-name">Welcome!</h1>
                        </>
                    }
                </header>
                <div className="profile-section">
                    <ProfileGallery currentUser={currentUser}/>
                    <ProfilePicture currentUser={currentUser}/>
                </div>
        </div>
    )
}