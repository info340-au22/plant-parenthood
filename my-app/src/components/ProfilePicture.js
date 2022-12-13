import React from 'react'; //import React library
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { UploadPopup } from './UploadPopup.js';
import OutsideClickHandler from 'react-outside-click-handler';
import { AiTwotoneEdit } from 'react-icons/ai';
import { EditProfile } from './EditProfile.js';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { getDatabase, onValue, ref, set as firebaseSet, update} from 'firebase/database';
import { getStorage, uploadBytes, getDownloadURL, ref as storageRef } from 'firebase/storage';



export function ProfilePicture(props) {
    const currentUser = props.currentUser;
    return (
        <Profile currentUser={currentUser}/>
    )
}

function Profile(props) {
    const currentUser = props.currentUser;
    const currentName = currentUser.displayName;
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(currentName);
    const uid = currentUser.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);

    useEffect(() => {
        
        onValue(userRef, (snapshot) => {
            const savedProfile = snapshot.val();
            if (savedProfile !== null) {
                setName(savedProfile.name);
            }
        })
    }, [])


    const cancelEditMode = () => {
        setEditMode(false);
    };

    const enterEditMode = () => {
        setEditMode(true);
    }


    const uploadFile = async (e) => {
        e.preventDefault()
        const fileImage = e.target[0]?.files[0];
        const storage = getStorage();
        const userImageRef = storageRef(storage, "/userImages/"+uid+".png");
        await uploadBytes(userImageRef, fileImage);
        const downloadUrlString = await getDownloadURL(userImageRef)
        
        await updateProfile(currentUser, {
            photoURL: downloadUrlString
        })
        
        const imgRef = ref(db, "users/"+uid+"/imgUrl");
        firebaseSet(imgRef, downloadUrlString);
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
                {currentUser.uid && 
                    <>
                        <img src={currentUser.photoURL} alt="profile of user" onClick={openPopup} className="profile-image"/>
                    </>
                }
                {!currentUser.uid && 
                    <>
                        <img src="../img/null.png" alt="profile of user" className="profile-image"/>
                    </>
                }
                
                <OutsideClickHandler onOutsideClick={closePopup}>
                    {popUpElem}
                </OutsideClickHandler> 
                <h1>{name}</h1>
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
    const currentName = currentUser.displayName;

    const [name, setName] = useState(currentName);
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
                            <h2>About {name}</h2>
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



