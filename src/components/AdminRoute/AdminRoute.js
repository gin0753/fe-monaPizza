import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (sessionStorage.getItem('role') === 'ROLE.ADMIN') return <Component {...props} />;
      return <Redirect to="/" />;
    }}
  />
);
