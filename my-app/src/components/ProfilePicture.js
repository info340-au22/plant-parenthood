import React from 'react'; //import React library
import { useState } from 'react';
import { Button } from './Button';
import { AiTwotoneEdit } from 'react-icons/ai';


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

    const enterEditMode = () => {
        setEditMode(true);
    }

    return (
        <section className="profile-card">
            <div className="profile-heading">
                <img src={currentUser.imgProfile} alt="profile picture"/>
                <h1>{currentUser.userName}</h1>
            </div>
            {editMode ?  (<EditProfile currentUser={currentUser} cancelEditMode={cancelEditMode}/>) : (<ProfileDetails currentUser={currentUser} enterEditMode={enterEditMode}/>)}
        </section>
    )   
}

function ProfileDetails(props) {
    const enterEditMode = props.enterEditMode;
    return (
        <div className="profile-details">
            <p>{props.currentUser.location}</p>
            <hr class="solid"></hr>
            <div className="bio-container">
                <div className="about-container">
                    <h2>About {props.currentUser.userName}</h2>
                    <div className="edit-container" onClick={enterEditMode}><AiTwotoneEdit size={24}/></div>
                </div>
                <p>{props.currentUser.bio}</p>
            </div>
        </div>
    )
}

function EditProfile(props) {
    const cancelEditMode = props.cancelEditMode;

    const handleSubmit = () => {

    }
    
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

            <Button class="submit-button" text="Save" handleClick={handleSubmit}/>
            <Button class="upload-button" text="Cancel" handleClick={cancelEditMode}/>
        </div> 
    ) 
}

