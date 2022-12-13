import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {HomePage} from './HomePage.js';
import {ComparisonPage} from './ComparisonPage.js';
import{NavBar} from  './NavBar.js';
import {ProfilePage} from './ProfilePage.js';
import {SignInPage} from './SignInPage.js'
import { Footer } from './Footer.js';
import { Route, Routes } from "react-router-dom"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref, set as firebaseSet} from 'firebase/database';

export function App(props) {
 
    const placeholderUser = {imgProfile: "../img/null.png", userName: "", location:"", bio:""};
    const [currentUser, setCurrentUser] = useState(placeholderUser);

    const [fetchCount, updateFetchCount] = useState(0);
    const [plantsData, updatePlantsData] = useState([]);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) { 
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.imgProfile = firebaseUser.photoURL || "../img/null.png";
                firebaseUser.userID = firebaseUser.uid;
                setCurrentUser(firebaseUser);
            } else { 
                setCurrentUser(placeholderUser);
            } 
        })

        const uid = currentUser.uid;
        const db = getDatabase();
        const userRef = ref(db, 'users/' + uid);


        onValue(userRef, (snapshot) => {
            const savedProfile = snapshot.val();
            if (savedProfile === null) {
                firebaseSet(userRef, true)
                firebaseSet(userRef, {
                    name: currentUser.displayName,
                })
            }
        })




        if (fetchCount <= 0) {
            fetch('./data/plants.json')
            .then(res => res.json())
            .then(data => {
                updateFetchCount(fetchCount + 1)
                updatePlantsData(data)

            })
            .catch((error) => {
                window.alert("There was an error loading the data: " + error);
            })
        }
        
    }, [])


    return(
    
        <main>
            <NavBar currentUser={currentUser}/>
                <Routes>
                    <Route path="/" element={<HomePage plantsData={plantsData}/>} />
                    <Route path="/ProfilePage" element={<ProfilePage currentUser={currentUser}/> } />
                    <Route path="/SignIn" element={<SignInPage currentUser={currentUser}/>} />
                    <Route path="/ComparisonPage" element={<ComparisonPage plantsData={plantsData}/>} />
                    <Route render={()=>{<HomePage plantsData={plantsData}/>}} />
                </Routes>
            <Footer/>
        </main>
    );
}

export default App;