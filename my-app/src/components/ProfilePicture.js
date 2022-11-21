// PROFILE PICTURE, LINH
import React from 'react'; //import React library


export function ProfilePicture(props) {
    const currentUser = {imgProfile: "../public/img/profile-pic.png", userName: "Jane Doe"}

    return (
        <section className="profile-card">
            <ProfileImg imgProfile={currentUser.imgProfile} userName={currentUser.userName}/>
            <ProfileForm/>
        </section>
    )
}

function ProfileImg(props) {
    <div className="profile-heading">
        <img src={props.imgProfile} alt="profile picture"/>
        <h1>{props.userName}</h1>
    </div>
}

function ProfileForm(props) {
    return (
        <div className="profile-details">
            <form>
                <label htmlFor="name">Name</label>
                <div className="form-input">
                    <input type="text"/>
                </div>

            </form>
            <form>
                <label htmlFor="location">Location</label>
                <div className="form-input">
                    <input type="text"/>
                </div>
            </form>
            <form>
                <label htmlFor="season">Season</label>
                <div className="form-input">
                    <select name="current_season" defaultValue={'Summer'}>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                        </select>
                </div>
            </form>
            <form>
                <label htmlFor="bio">Your Bio</label>
                <div className="form-input">
                    <textarea rows="2"></textarea>
                </div>
            </form>
            <div className="submit-button">
                <button>Save</button>
            </div>
        </div> 
    )   
}

