// HOME PAGE, CINDY
import React from 'react';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';

export function UploadPage() {
    
    function openPopup(event) {
        const popup = event.target;
        popup.classList.add("open-popup");
    }

    function closePopup(event) {
        const popup = event.target;
        popup.classList.remove("open-popup");
    }

    return (
        <div>
            <header>
                <h1 className="project-name">upload your own pictures!</h1>
            </header>
            <div className="container">
                <button type="upload" className="btn" onClick={openPopup}>Upload</button>

                <div className="popup" id="popup">
                    <img src="img/card-daisies.png" alt="flower decor"/>
                    <h2>Upload Your Plant</h2>
                    <p>some text</p>
                    <form action="/action_page.php">
                        <input type="file" id="myFile" name="filename"/>
                        <button type="submit button" onClick={closePopup}>OK</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}