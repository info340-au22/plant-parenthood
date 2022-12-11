import React from 'react'; //import React library
import { useState } from 'react';
import 'materialize-css';
import { Icon } from 'react-materialize';
import { Button } from './Button';


export function ProfilePicture(props) {
    const currentUser = props.currentUser;

    return (
        <Profile currentUser={currentUser}/>
    )
}

function Profile(props) {
    const currentUser = props.currentUser;
    const [editMode, setEditMode] = useState(false);

    const cancelEditMode = () => {
        setEditMode(false);
    };
    return (
        <section className="profile-card">
            <div className="profile-heading">
                <img src={currentUser.imgProfile} alt="profile picture"/>
                <h1>{currentUser.userName}</h1>
            </div>
            {editMode ?  (<EditProfile currentUser={currentUser}/>) : (<ProfileDetails currentUser={currentUser}/>)}
        </section>
    )   
}

function ProfileDetails(props) {
    return (
        <div className="profile-details">
            <p>{props.currentUser.location}</p>
            <hr class="solid"></hr>
            <div className="bio-container">
                <h2>About {props.currentUser.userName}</h2>
                <p>{props.currentUser.bio}</p>
            </div>
        </div>
    )
}

function EditProfile(props) {
    return (
        <div className="profile-details">
            <form>
                <label htmlFor="name">Name</label>
                <div className="form-input">
                    <input type="text"/>
                </div>
            </form>
            <form>
                <label htmlFor="location">Location</label>
                <div className="form-input">
                    <input type="text"/>
                </div>
            </form>
            <form>
                <label htmlFor="bio">Your Bio</label>
                <div className="form-input">
                    <textarea rows="2"></textarea>
                </div>
            </form>

            <Button class="submit-button" text="Save"/>
            <Button class="upload-button" text="Cancel"/>
        </div> 
    ) 
}

