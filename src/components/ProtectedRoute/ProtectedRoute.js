import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
        (props) => {
          if (sessionStorage.getItem('login-token')) {
            return <Component {...props} />;
          }

          return <Redirect to="/home" />;
        }
    }
  />
);

export default ProtectedRoute;
