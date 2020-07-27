// == Import npm
import React from 'react';

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
    <HomePage />
    <List />
    <ProductDetail />
    <LoginForm />
    <BackOffice />

  </div>
);

// == Export
export default App;
