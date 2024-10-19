// Components/PrivateRoute/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to="/" />; // Redirect to signin if not admin
  }
  
  return children; // If admin, render the children (AddProduct)
};

export default PrivateRoute;
