import React from 'react';
import PropTypes from 'prop-types';

import BackHeader from 'src/components/BackOffice/BackHeader';
import SideBar from 'src/components/BackOffice/SideBar';
import Add from 'src/components/BackOffice/Add';
import Products from 'src/components/List/Products';
import Users from 'src/components/BackOffice/Users';

import './styles.scss';

const BackOffice = () => (
  <div className="backOffice">
    <BackHeader />
    <SideBar />
    <Add />
    <Products />
    <Users />
  </div>
);

BackOffice.propTypes = {};

export default BackOffice;
