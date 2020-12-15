import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

const NoPassword = () => {

    console.log('if No Password');

    return (
        <NavLink
            to="/reset"
            className="form__nopassword"
            exact
        >
            Mot de passe oublié ?
        </NavLink>
    );

};

export default NoPassword;