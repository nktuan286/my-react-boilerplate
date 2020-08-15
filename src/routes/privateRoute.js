/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
    //   if (!isUserAuthenticated()) {
    //     // not logged in so redirect to login page with the return url
    //     return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    //   }

    //   const loggedInUser = getLoggedInUser();
    //   // check if route is restricted by role
    //   if (roles && roles.indexOf(loggedInUser.role) === -1) {
    //     // role not authorised so redirect to home page
    //     return <Redirect to={{ pathname: '/' }} />;
    //   }

    //   // authorised so return component
    //   return <Component {...props} />;
    // }}

      <Component {...props} />}
  />
);

export default PrivateRoute;
