import { useContext } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import './Profile.css'
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Utils/firebase";
import { message } from "antd";


function Profile() {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut= async ()=>{

       await signOut(auth)
       message.warning("You have been signed out")
       navigate("/")

    }

    return(
        <div className="profile-main">
        <div className="profile-container">
            {user?.isLogin ? (

            <div className="img-container">
            <img src={user?.photoUrl || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAM1BMVEX////O0NLP0dPS1Nb19fb8/Pz5+fr39/jt7u/Z29zp6uvU1tfz8/P///7Y2dvn6Ong4uJDV6wKAAADYklEQVR4nO3b6W6rMBCGYTaDWQrc/9WWBEKMzWpBGar3kc6PEzVRPnliD2AHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCKSpNOZksdare7I00kbV7n+fvfWdqmujvVSLXhJfLs7mSDi/KFYSkjob4qXzeGIn6J+XUBQ313uE4SXRgwvztdMFZoXJe22H3FEdmmAeP07nhjwEa5i56zLjqSRXUfMLk73jfgyR87BBSwGF4UMJceUFW60JX/NJ/LLlFV1K/pIioL34hDQAFL/VzArB7nQd9uRPQIpqUx03smlBxQTXub2qtKJQe0m1OvfktwQGU3p15DKC5gMb6QxlZAr35LcECn+458VmvBAav/HjBzStTnWwoOqEo74MZvsJh7UUzAHyegc4+mXf+EZnYdEXO5NBPQmmWi9VZGR2E8s45IDtiNiWn9QiqL5sdYdMBJka7nU7X77rch4P1XE7MBg+Izk5azM8hXu1TG9a756Q/MBwzSIi/jut26HCw+4+zcAZUesCs+lW72oNV3ybTfLz/gDmbXGlnTyX8IOL3ssIr0oQET8wtbDcF0un1mQBUb9+Lt6+JpkT4y4Ksm208lus80SrNIHxnwXZOfrmXmoZRZpE8M2JgxZp+aGl23mIDu5dLiHw41Gelg6ampUaRiAqq9AY3fXLX4UHHsun8eFzD93uwOY13PhJsWafmwgGox0tSY6GkBd+/E+BTpwwI2K5Eswwc9K+CRnSZRn+lRASv7RuKqvut+UsDUvo+44d0JCA9ofi/nYcym1/0L2QF1bDRdx7eyvT5LXEDz5m13pR6N/z8wgX683is5YF+Tw5D6bNWTHtC8akgOTaDPCDiOWZcw9dqpJzug8fSsOT6BCgxYTAOaVw2hT31KD3jG/mb9uj0lNGCx8r2PBPwRGvBY17kSUOgIOjtIvAPKHEHPSfM5AZtoa0f2DqHgEk0qa+N15UFrnUodwTM/9r8HlLfQN8snBHrumQL3HIJBzAh+euvNycM5E+IcEzFPksR9lz63g+avZVce7dnYJPU3LjtdF8o4nOVunzyP33bv0112gLC8fyNXT5/TgtpqKfm6taIpN/uvo2Itoz57auWg3G6Tji3JJOUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAguAXLpIvOW/ZAVEAAAAASUVORK5CYII="}  alt="" className="user-image"/>
            {user?.isLogin && <span className="online-status"></span>}
            </div>
            ):(<div></div>)}
            
            <h3>{user.displayName }</h3>
            <h4>{user.email}</h4>

            <button onClick={handleSignOut}>Log Out</button>

        </div>
    </div>
    )
    
}

export default Profile;