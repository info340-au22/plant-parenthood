import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import {HomePage} from './HomePage.js';
import {ComparisonPage} from './ComparisonPage.js';
import {ProfilePage} from './ProfilePage.js';
import {SubmitButton} from './SubmitButton';

export function App(props) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        {/* current page displayed for testing */}
        {/* <HomePage plantsData={props.plantsData}/> */}
        <ComparisonPage />
    </React.StrictMode>
    );
}

export default App;