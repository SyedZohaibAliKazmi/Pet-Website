import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import './SignIn.css'
import { useState } from "react";
import { message, Spin } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";  // Import the Xmark icon
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../Utils/firebase";

import { doc, setDoc } from "firebase/firestore";


function SignIn() {

    const [loading , setloading]= useState(false)
const navigate = useNavigate()



const handleSignIn = async () => {
    try {
        setloading(true);
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

        const result = await signInWithPopup(auth, provider);

        const user = result.user;
        console.log("results=>", result);

        const ref = doc(db, "users", user.uid);
        await setDoc(ref, {
            email: user.email,
            photoUrl: user.photoURL,
            uid: user.uid,
            displayName: user.displayName || "Anonymous",
        });

        console.log("user", user);
        message.success("Successfully Signed In");
        navigate("/shop");
    } catch (error) {
        setloading(false); 

     
        if (error.code === "auth/popup-closed-by-user") {
            message.error("Sign-in popup was closed by the user."); 
        } else {
            message.error("Error signing in: " + error.message); 
        }

        console.log("error=>", error); 
    }
};


const handleCancel = ()=>{
    navigate("/")
}

    return(
        <div>
            <Navbar/>
            <div className="signin-container">


            <div className="signin-main">
            <button className="cancel-button" onClick={handleCancel}><FontAwesomeIcon icon={faXmark}/></button> {/* Cancel button */}
                <div className="signin-text">
                <h1>SignIn From Google Account </h1>

                {loading ? (
                    <Spin size="large" className="custom-spin"/>
                ) : ( 
                <button onClick={handleSignIn}>SignIn With Google</button>
                )} 



                </div>

            </div>
            </div>

        </div>
    )
    
}

export default SignIn;