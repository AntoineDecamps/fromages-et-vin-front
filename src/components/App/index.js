// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'src/components/HomePage';
import List from 'src/components/List';
import ProductDetail from 'src/components/ProductDetail';
import LoginForm from 'src/components/LoginForm';
import BackOffice from 'src/components/BackOffice';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/vins">
      <List />
    </Route>
    <Route exact path="/fromages">
      <List />
    </Route>
    <Route exact path="/detail">
      <ProductDetail />
    </Route>
    <Route exact path="/connexion">
      <LoginForm />
    </Route>
    <Route exact path="/admin">
      <BackOffice />
    </Route>

  </div>
);

// == Export
export default App;
