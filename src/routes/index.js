/* eslint-disable no-tabs */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { lazy, Suspense } from 'react';
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router';

/* Screens */
import Home from '../pages/home';
import Contact from '../pages/contact';

// routes
import PrivateRoute from './privateRoute';

function WaitingComponent(Component) {
  return (props) => (
    <Suspense
      fallback={(
        <div className="loading-wrapper">
          {/* <LoadingComponent /> */}
        </div>
  )}
    >
      <Component {...props} />
    </Suspense>
  );
}

class Router extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={WaitingComponent(Home)} />
        <Route exact path="/contact" component={WaitingComponent(Contact)} />
        {/* <Route exact path="/login" component={WaitingComponent(Login)} /> */}
        {/* <PrivateRoute
					exact
          path="/admin"
          name="Admin Page"
					component={WaitingComponent()}
					roles={
            ['Admin']
          }
				/>
        <PrivateRoute
					exact
          path="/admin/posts"
          name="Admin Page"
					component={WaitingComponent()}
					roles={
            ['Admin']
          }
				/>
        <PrivateRoute
					exact
          path="/admin/roles"
          name="Admin Page"
					component={WaitingComponent()}
					roles={
            ['Admin']
          }
				/>
        <PrivateRoute
					exact
          path="/admin/users"
          name="Admin Page"
					component={WaitingComponent()}
					roles={
            ['Admin']
          }
				/> */}
        {/* <Route exact path="/404" component={notFoundPage} />
				<Redirect to="/404" /> */}
      </Switch>
    );
  }
}

export default withRouter(Router);
