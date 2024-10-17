import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {

const navigate = useNavigate()
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
            <button>
                <FontAwesomeIcon icon={faUser}/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
