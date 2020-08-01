// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'src/components/HomePage';
import List from 'src/components/List';
import ProductDetail from 'src/components/ProductDetail';
import LoginForm from 'src/components/LoginForm';
import BackOffice from 'src/components/BackOffice';
import NoMatch from 'src/components/NoMatch';

import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const App = ({ getCheeses, getWines, cheeses, wines }) => {
  useEffect(() => {
    getCheeses();
    getWines();
  }, []);
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
          />
        </Route>
        <Route exact path="/fromages">
          <List
            product={cheeses}
            name="Fromages"
          />
        </Route>
        <Route
          exact
          path="/produit/:slug"
          component={({ match }) => (
            <ProductDetail
              slug={match.params.slug}
            />
          )}
        />
        <Route exact path="/connexion">
          <LoginForm />
        </Route>
        <Route exact path="/admin">
          <BackOffice />
        </Route>
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
  cheeses: PropTypes.array.isRequired,
  wines: PropTypes.array.isRequired,
};

// == Export
export default App;
