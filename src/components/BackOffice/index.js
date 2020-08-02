import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BackHeader from 'src/components/BackOffice/BackHeader';
import BackHomePage from 'src/components/BackOffice/BackHomePage';
import SideBar from 'src/components/BackOffice/SideBar';
import Add from 'src/components/BackOffice/Add';
import Produits from 'src/containers/Produits';
import Users from 'src/components/BackOffice/Users';
import NoMatch from 'src/components/NoMatch';

import './styles.scss';

const BackOffice = ({ cheeses }) => (
  <div className="backOffice">
    <Switch>
      <Route exact path="/admin">
        <BackHeader />
        <BackHomePage />
        <SideBar />
      </Route>
      <Route exact path="/admin/fromages">
        <BackHeader />
        <Produits
          cheeses={cheeses}
        />
        <SideBar />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
    {/* <Produits /> */}
    {/* <Add /> */}
    {/* <Products /> */}
    {/* <Users /> */}
  </div>
);

BackOffice.propTypes = {};

export default BackOffice;
