import { auth, googleProvider } from "../config/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.photoURL)

const signIn = async () => {
        try {
    await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err);
        }
};

const signInWithGoogle = async () => {
    try {
await signInWithPopup(auth, googleProvider);
    } catch(err) {
        console.error(err);
    }
};

const logout = async () => {
    try {
await signOut(auth);
    } catch(err) {
        console.error(err);
    }
};

    return (
        <div className="registration">
            <h3>Register Now</h3>
            <h6><i>Quick Sign-Up</i></h6>
            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} 
                />
            <br />
            <input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
            <br />
            <div className="authentication-buttons">
            <button class="authentication"  onClick={signIn}>Sign In</button>
            <br />
            <button class="authentication"  onClick={signInWithGoogle}>Sign in With Google</button>
            <br />
            <button class="authentication" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}