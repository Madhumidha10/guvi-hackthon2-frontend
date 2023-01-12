import React from 'react'

const UserRoute =({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          isAuthenticated() && isAuthenticated().role === 0 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          );
        }}
      />
    );
  };

export default UserRoute