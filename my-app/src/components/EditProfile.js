import React from 'react'; //import React library
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, child } from 'firebase/database';


export function EditProfile(props) {
    const cancelEditMode = props.cancelEditMode;
    const currentUser = props.currentUser;

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");

    const uid = currentUser.uid;
    const db = getDatabase();
    const usersRef = ref(db, 'users');


    const handleSubmit = () => {

        usersRef.orderByKey().equalTo(uid).once("value", (snapshot) => {
            if (snapshot.exists()) {
                console.log("SUCCCESS!!!!");
            }
        })
        
        // firebaseSet(ref(db, 'users/' + uid), true);
        // firebaseSet(ref(db, 'users/' + uid), {
        //     name,
        //     location,
        //     bio
        // })
        // cancelEditMode();

        // if (usersRef.child(uid).exists()) {
        //     firebaseSet(ref(db, 'users/' + uid), {
        //         name: name,
        //         location: location,
        //         bio: bio
        //     })
        //     cancelEditMode();
        // } else {
        //     firebasePush(ref(db, 'users/' + uid), {
        //         name: name,
        //         location: location,
        //         bio: bio
        //     })
        //     cancelEditMode();
        // }
    };

    return (
        <div className="profile-details">
            <form>
                <label htmlFor="name">Name</label>
                <div className="form-input">
                    <input type="text" onChange={(event) => setName(event.target.value)}/>
                </div>
            </form>
            <form>
                <label htmlFor="location">Location</label>
                <div className="form-input">
                    <input type="text" onChange={(event) => setLocation(event.target.value)}/>
                </div>
            </form>
            <form>
                <label htmlFor="bio">Your Bio</label>
                <div className="form-input">
                    <textarea rows="2" onChange={(event) => setBio(event.target.value)}></textarea>
                </div>
            </form>

            <Button class="submit-button" text="Save" handleClick={handleSubmit}/>
            <Button class="upload-button" text="Cancel" handleClick={cancelEditMode}/>
        </div> 
    ) 
}