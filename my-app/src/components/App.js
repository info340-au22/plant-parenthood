import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../index.css';
import {HomePage} from './HomePage.js';
import {ComparisonPage} from './ComparisonPage.js';
import {ProfilePage} from './ProfilePage.js';
// import {UploadPage} from './UploadPage';

export function App(props) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    document.querySelector("body").setAttribute("class", "all-body");
    root.render(
    <React.StrictMode>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"/>
        {/* <link rel="stylesheet" href="../index.css"></link> */}
        <link rel="icon" type="image/png" href="img/favicon.png"/>

        {/* current page displayed for testing */}

        {/* <HomePage plantsData={props.plantsData}/> */}
        {/* <ComparisonPage /> */}
        {/* <UploadPage/> */}
        <ProfilePage />

    </React.StrictMode>
    );
}

export default App;