import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const CustomRoute = ({ options = {}, ...rest }) => {
  return <Route {...rest} />;
};

export default CustomRoute;
