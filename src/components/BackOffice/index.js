import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BackHeader from 'src/components/BackOffice/BackHeader';
import BackHomePage from 'src/components/BackOffice/BackHomePage';
import SideBar from 'src/containers/SideBar';
import Produits from 'src/containers/Produits';
import ModalPage from 'src/containers/ModalPage';
import ModalWine from 'src/containers/ModalWine';
import ModalUser from 'src/containers/ModalUser';
import NoMatch from 'src/components/NoMatch';
import AddCheese from 'src/components/BackOffice/AddCheese';
import AddWine from 'src/components/BackOffice/AddWine';
import AddUser from 'src/components/BackOffice/AddUser';
import Users from 'src/containers/Users';

import './styles.scss';

const BackOffice = ({ cheeses, wines }) => (
  <div className="backOffice">
    <Switch>
      {/* HomePage */}
      <Route exact path="/admin">
        <BackHeader />
        <BackHomePage />
        <SideBar />
      </Route>
      {/* CheesePage */}
      <Route exact path="/admin/fromages">
        <BackHeader />
        <Produits
          products={cheeses}
          name="fromages"
          url="fromage"
        />
        <SideBar />
      </Route>
      {/* WinePage */}
      <Route exact path="/admin/vins">
        <BackHeader />
        <Produits
          products={wines}
          name="vins"
          url="vin"
        />
        <SideBar />
      </Route>
      {/* UserPage */}
      <Route exact path="/admin/utilisateurs">
        <BackHeader />
        <Users />
        <SideBar />
      </Route>
      {/* Add Cheese Form */}
      <Route exact path="/admin/ajouter-fromage">
        <BackHeader />
        <AddCheese />
        <SideBar />
      </Route>
      {/* Add Wine Form */}
      <Route exact path="/admin/ajouter-vin">
        <BackHeader />
        <AddWine />
        <SideBar />
      </Route>
      {/* Add User Form */}
      <Route exact path="/admin/ajouter-utilisateur">
        <BackHeader />
        <AddUser />
        <SideBar />
      </Route>
      {/* ModalPage to see detail of cheese selected + access to edit and delete option */}
      <Route
        exact
        path="/admin/fromage/:slug"
        component={({ match }) => (
          <ModalPage
            slug={match.params.slug}
          />
        )}
      />
      {/* ModalPage to see detail of wine selected + access to edit and delete option */}
      <Route
        exact
        path="/admin/vin/:slug"
        component={({ match }) => (
          <ModalWine
            slug={match.params.slug}
          />
        )}
      />
      {/* ModalPage to see detail of the user + access to edit and delete option */}
      <Route
        exact
        path="/admin/utilisateurs/:slug"
        component={({ match }) => (
          <ModalUser
            slug={match.params.slug}
          />
        )}
      />
      {/* <Route exact path="/admin/supprimer/fromage">
        <DeleteModal />
      </Route> */}
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

BackOffice.propTypes = {
  cheeses: PropTypes.array.isRequired,
  wines: PropTypes.array.isRequired,
};

export default BackOffice;
