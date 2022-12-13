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

    const [file, setFile] = useState(undefined);
    const initialURL = currentUser.imgProfile || "../img/null.png";
    const [imgUrl, setImgURL] = useState(initialURL);


    const handleChange = (e) => {
        if (e.target.files.length > 0 && e.target.files[0]) {
            const fileImage = e.target.files[0];
            setFile(fileImage);
            setImgURL(URL.createObjectURL(file));
        }
        

    }

    const uploadFile = async (e) => {
        e.preventDefault()
        const storage = getStorage();
        const userImageRef = storageRef(storage, "/userImages/"+uid+".png");
        await uploadBytes(userImageRef, file);
        const downloadUrlString = await getDownloadURL(userImageRef)
        console.log(downloadUrlString)
        
        await updateProfile(currentUser, {
            photoURL: downloadUrlString
        })
        
        const imgRef = ref(db, "users/"+uid+"/imgUrl");
        firebaseSet(imgRef, downloadUrlString);
        alert("You have updated your profile picture!")
        
    }



    const [popUpElem, togglePopup] = useState(null)

    const openPopup = () => {
        togglePopup(<UploadPopup uploadFunction={uploadFile} handleFunction={handleChange} handleClose={closePopup} open="open-popup"/>);
    }

    const closePopup = () => {
        togglePopup(<UploadPopup uploadFunction={uploadFile} handleFunction={handleChange} close="close-popup" action="/Profile"/>)
    }

    return (
        <section className="profile-card">
            <div className="profile-heading">
                <img src={imgUrl} alt="profile of user" onClick={openPopup}/>
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



