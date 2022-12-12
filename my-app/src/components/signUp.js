import { userRef} from 'firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default (props) => {
    const setAlertMessage = props.setAlertMessage;
    const name = props.name;
    const email = props.email;
    const password = props.password;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
            userRef.child(data.user.uid).set({
                name,
                email
            })
            return true;
        })
        .catch((error) => {
            setAlertMessage(error.message);
            return false;
        });
}