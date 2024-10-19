


import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserLayout.css";
import Navbar from "../Navbar/Navbar";

function UserLayout() {
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
