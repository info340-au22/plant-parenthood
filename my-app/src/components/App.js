import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage';
import ComparisonPage from './components/ComparisonPage';
import ProfilePage from './components/ProfilePage';

export function App(props) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        {/* current page displayed for testing */}
        <HomePage />
    </React.StrictMode>
    );
}

export default App;