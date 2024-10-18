import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { auth } from "../../Utils/firebase";
import {AuthContext} from '../../Context/AuthContext/AuthContext'
import { useContext } from "react";

function Navbar() {

const navigate = useNavigate()
const {user}= useContext(AuthContext)
  const handleCart = ()=>{

    navigate("/cart")

  }


  return (
    <div id="main">
      <div id="nav-main">
        <div id="logo">
          <h1>Logo</h1>
        </div>
        <div id="pages-link">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/shop"}>Shop</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
       

        <div id="Nav-Account">
            <button onClick={handleCart}>
                <FontAwesomeIcon icon={faCartShopping}/>
            </button>
            {/* Acoount  */}

            {auth.currentUser ?(
               
            
              <Link to={"/user"}>
              <Avatar className="account-button" src={user?.photoUrl}/>
              </Link>
            

            ):(
              <Link to={'/signin'}>

            <button>
                <FontAwesomeIcon icon={faUser}/>
            </button>
            </Link>
            )}
            
        </div>
      </div>
    </div>
  );
}

export default Navbar;
