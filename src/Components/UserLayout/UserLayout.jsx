


import { Outlet } from "react-router-dom";
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
          <Link to={"/user/Profile"}>
            <h2 >
             * Profile
            </h2>
          </Link>
          <Link to={"/cart"}>
            <h2 >
              * cart
            </h2>
          </Link>
         
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
