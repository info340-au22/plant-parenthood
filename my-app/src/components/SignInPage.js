import React from "react";
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, EmailAuthProvider } from "firebase/auth";

export function SignInPage() {

    // const db = getDatabase();
    // const userRef = ref(db, "users");

    const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
          
    //       const uid = user.uid;

    //     } else {

    //     }
    //   });

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

    return (
        <div className="all-body">
            <div className="container card-body">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj}/>
            </div>
        </div>
    )
}