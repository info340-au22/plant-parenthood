import React from 'react'; //import React library
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { UploadPopup } from './UploadPopup.js';
import OutsideClickHandler from 'react-outside-click-handler';
import { AiTwotoneEdit } from 'react-icons/ai';
import { EditProfile } from './EditProfile.js';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import {
    uploadBytesResumable,
    getDownloadURL,
    listAll
  } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { getDatabase, onValue, ref, set as firebaseSet} from 'firebase/database';



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

    const [imgUrl, setImgURL] = useState(null);

    const uploadFile = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) {
            return alert("Please upload an image file!");
        }
        const storageRef = ref(storage, `profilepics/${file.name + v4()}`);
        uploadBytesResumable(storageRef, file);
        console.log(listAll(storageRef))
        listAll(storageRef).then((response) => {
            const image = response.items;
            const url = getDownloadURL(image);
            setImgURL(url);
        })
        const auth = getAuth();
            updateProfile(auth.currentUser, {
                photoURL: imgUrl
        })
        
        alert("You have updated your profile picture!")
    }


    const [popUpElem, togglePopup] = useState(null)

    const openPopup = () => {
        togglePopup(<UploadPopup uploadFunction={uploadFile} handleClose={closePopup} open="open-popup"/>);
    }

    const closePopup = () => {
        togglePopup(<UploadPopup uploadFunction={uploadFile} close="close-popup" action="/Profile"/>)
    }

    return (
        <section className="profile-card">
            <div className="profile-heading">
                <img src={currentUser.imgProfile} alt="profile of user" onClick={openPopup}/>
                <OutsideClickHandler onOutsideClick={closePopup}>
                    {popUpElem}
                </OutsideClickHandler> 
                <h1>{currentUser.userName}</h1>
            </div>
            {editMode ?  (<EditProfile currentUser={currentUser} cancelEditMode={cancelEditMode}/>) : (<ProfileDetails currentUser={currentUser} enterEditMode={enterEditMode}/>)}
        </section>
    )   
}

const handleSignOut = () => {
    signOut(getAuth());
}

function ProfileDetails(props) {
    const enterEditMode = props.enterEditMode;
    const currentUser = props.currentUser;

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");

    const uid = currentUser.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);

    useEffect(() => {
        
        onValue(userRef, (snapshot) => {
            const savedProfile = snapshot.val();
            if (savedProfile !== null) {
                setName(savedProfile.name);
                setLocation(savedProfile.location);
                setBio(savedProfile.bio);
            }
        })
    }, [])


    return (
        <div className="profile-details">
            <p>{location}</p>
            <hr className="solid"></hr>
            <div className="bio-container">
                <div className="about-container">
                    {currentUser.uid &&
                        <>
                            <h2>About {props.currentUser.displayName}</h2>
                        </>
                    }
                    {currentUser.uid &&
                        <>
                            <div className="edit-container" onClick={enterEditMode}><AiTwotoneEdit size={24}/></div>
                        </>
                    }
                </div>
                <p>{bio}</p>
            </div>
            {currentUser.uid &&
                <>
                    <Button classStyle="submit-button" text="Sign Out" handleClick={handleSignOut}/>
                </>
            }
                
        </div>
    )
}



