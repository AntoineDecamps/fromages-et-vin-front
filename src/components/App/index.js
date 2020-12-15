/* eslint-disable react/jsx-boolean-value */
// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import List from 'src/components/List';
import CheeseDetail from 'src/containers/CheeseDetail';
import WineDetail from 'src/containers/WineDetail';
import LoginForm from 'src/components/LoginForm';
import ForgotForm from 'src/components/ForgotForm';
import BackOffice from 'src/components/BackOffice';
import NoMatch from 'src/components/NoMatch';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant

const App = ({
  getCheeses,
  getWines,
  cheeses,
  wines,
  checkIsLogged,
  getUsers,
  getProposals,
  cheeseLoading,
  wineLoading,
}) => {
  useEffect(() => {
    getCheeses();
    getWines();
    getUsers();
    getProposals();
  }, []);

  useEffect(checkIsLogged, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/vins">
          <List
            product={wines}
            name="Vins"
            redirectURL="vin"
          />
        </Route>
        <Route exact path="/fromages">
          <List
            product={cheeses}
            name="Fromages"
            redirectURL="fromage"
          />
        </Route>
        <Route
          exact
          path="/produit/fromage/:slug"
          component={({ match }) => (
            <>
              {cheeseLoading && (
                <Dimmer active>
                  <Loader size="large">Loading</Loader>
                </Dimmer>
              )}
              {!cheeseLoading && (
                <CheeseDetail
                  slug={match.params.slug}
                />
              )}
            </>
          )}
        />
        <Route
          exact
          path="/produit/vin/:slug"
          component={({ match }) => (
            <>
              {wineLoading && (
                <Dimmer active>
                  <Loader size="large">Loading</Loader>
                </Dimmer>
              )}
              {!wineLoading && (
                <WineDetail
                  slug={match.params.slug}
                />
              )}
            </>
          )}
        />
        <Route exact path="/connexion">
          <LoginForm />
        </Route>
        <Route exact path="/reset">
          <ForgotForm />
        </Route>
        <BackOffice
          cheeses={cheeses}
          wines={wines}
        />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  getCheeses: PropTypes.func.isRequired,
  getWines: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  cheeses: PropTypes.array.isRequired,
  wines: PropTypes.array.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  getProposals: PropTypes.func.isRequired,
  cheeseLoading: PropTypes.bool.isRequired,
  wineLoading: PropTypes.bool.isRequired,
};

// == Export
export default App;
