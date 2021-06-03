import React from 'react';

import { Route, Redirect } from "react-router-dom";

import Footer from './Footer';


const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <>
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>

    <Route>
      {
        ()=> props.loggedIn ? <Footer /> : null
      }
    </Route>
    </>
)}

export default ProtectedRoute;