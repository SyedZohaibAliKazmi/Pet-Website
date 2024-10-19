


import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserLayout.css";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

function UserLayout() {
 const {user}= useContext(AuthContext)

 const userEmail = user?.email; 
 const isAdmin = userEmail === "syedmohibali9090@gmail.com"; 


 


  return (
<div>
    <Navbar/>
    <div className="main-user-Layout">
      <div className="layout-pages">
        
        <div className="user-page">
            <h1>Account Deatils</h1>
         <NavLink to='/user/profile' className={({ isActive }) => (isActive ? "active-link" : "")} >
            <h2 >
             * Profile
            </h2>
            </NavLink>
          <NavLink to="/user/cart" className={({ isActive }) => (isActive ? "active-link" : "")}>
         
            <h2 >
              * cart
            </h2>
            </NavLink>

            {/* Add Product  */}

            {isAdmin ? ( // Agar user admin hai to "Add Product" ka link dikhaiye
              <NavLink to="/user/addproduct" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <h2>* Add Product</h2>
              </NavLink>
            ) : (
             <div></div>
            )}


         
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserLayout;
