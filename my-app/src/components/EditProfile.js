import React from 'react'; //import React library
import { useState} from 'react';
import { Button } from './Button';
import { getDatabase, onValue, ref, set as firebaseSet} from 'firebase/database';
import { getAuth, updateProfile } from 'firebase/auth';


export function EditProfile(props) {
    const cancelEditMode = props.cancelEditMode;
    const currentUser = props.currentUser;

    const uid = currentUser.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");


    // userRef.once("value")
    // .then((snapshot) => {
    //     const savedProfile = snapshot.val();
    //     name = savedProfile.name;
    //     location = savedProfile.location;
    //     bio = savedProfile.bio;
    // });


    const handleSubmit = () => {

        firebaseSet(userRef, {
            name: name,
            location: location,
            bio: bio
        })
        if (name != "") {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: name
            })
        }
        
        cancelEditMode();

    };

    return (
        <div className="profile-details">
            <form>
                <label htmlFor="name">Name</label>
                <div className="form-input">
                    <input type="text" onChange={(event) => {if (event.target.value !== "") {setName(event.target.value)}}}/>
                </div>
            </form>
            <form>
                <label htmlFor="location">Location</label>
                <div className="form-input">
                    <input type="text" onChange={(event) => {if (event.target.value !== "") {setLocation(event.target.value)}}}/>
                </div>
            </form>
            <form>
                <label htmlFor="bio">Your Bio</label>
                <div className="form-input">
                    <textarea rows="2" onChange={(event) => {if (event.target.value !== "") {setBio(event.target.value)}}}></textarea>
                </div>
            </form>

            <Button classStyle="submit-button" text="Save" handleClick={handleSubmit}/>
            <Button classStyle="upload-button" text="Cancel" handleClick={cancelEditMode}/>
        </div> 
    ) 
}