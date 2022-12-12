import React from "react";
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';
import { getAuth, EmailAuthProvider } from "firebase/auth";

export function SignInPage(props) {
    const currentUser = props.currentUser;

    const auth = getAuth();

    const uiConfigObj = {
        signInOptions: [{
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        }],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
        credentialHelper: 'none'
    };

    if (currentUser.uid != null) {
        return <Navigate to="/ProfilePage" replace/>
    }

    return (
        <div className="all-body">
            <div className="container card-body">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj}/>
            </div>
        </div>
    )
}