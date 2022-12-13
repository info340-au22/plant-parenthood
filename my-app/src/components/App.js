import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import '../index.css';
import {HomePage} from './HomePage.js';
import {ComparisonPage} from './ComparisonPage.js';
import{NavBar} from  './NavBar.js';
import {ProfilePage} from './ProfilePage.js';
import {SignInPage} from './SignInPage.js'
// import {UploadPage} from './UploadPage';
import { Footer } from './Footer.js';
import { Route, Routes, BrowserRouter  } from "react-router-dom"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref, set as firebaseSet} from 'firebase/database';

export function App(props) {
 
    const placeholderUser = {imgProfile: "../img/null.png", userName: "", location:"", bio:""};
    const [currentUser, setCurrentUser] = useState(placeholderUser);

    // const [displayedRoutes, updateDisplayedRoutes] = useState(null);
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
                updatePlantsData([{"Name":"There was an error loading the data: " + error, "Scientific":"---", "low": "---", "high": "---", "img":"https://static.thenounproject.com/png/741653-200.png", "Color": "[]", "Native": "[]"}]);
            })
        }
        
    }, [])

    const root = ReactDOM.createRoot(document.getElementById('root'));
    document.querySelector("body").setAttribute("class", "all-body");
    root.render(
    <React.StrictMode>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"/>
        <link rel="icon" type="image/png" href="img/favicon.png"/>
        <BrowserRouter>
            <NavBar currentUser={currentUser}/>
                <Routes>
                    <Route path="/" element={<HomePage plantsData={plantsData}/>} />
                    <Route path="/ProfilePage" element={<ProfilePage currentUser={currentUser}/> } />
                    <Route path="/SignIn" element={<SignInPage currentUser={currentUser}/>} />
                    <Route path="/ComparisonPage" element={<ComparisonPage plantsData={plantsData}/>} />
                    <Route render={()=>{<HomePage plantsData={plantsData}/>}} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
    );
}

export default App;