/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// styles for this kit
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.4.0';
import 'assets/demo/demo.css?v=1.4.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.4.0';
// pages for this kit
// import Index from 'views/Index.js';
import NucleoIcons from 'views/NucleoIcons.js';
// import LoginPage from 'views/examples/LoginPage.js';
import {
  LandingPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  OfferList,
  ProductDetail,
  RequestList,
  LeaderboardList,
  CreateOffer,
} from 'views';
import LeaderboardCard from './components/LeaderboardCard';
import { UserProvider } from 'components';
// import ProfilePage from 'views/examples/ProfilePage.js';

const hist = createBrowserHistory();

ReactDOM.render(
  <UserProvider>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route path="/have-list" render={(props) => <OfferList {...props} />} />
        <Route
          path="/prod-detail/:id"
          render={(props) => <ProductDetail {...props} />}
        />
        <Route
          path="/request-list"
          render={(props) => <RequestList {...props} />}
        />
        <Route
          path="/leaderboard-list"
          render={(props) => <LeaderboardList {...props} />}
        />
        <Route
          path="/create-offer"
          render={(props) => <CreateOffer {...props} />}
        />
        <Redirect to="/landing-page" />
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById('root')
);
