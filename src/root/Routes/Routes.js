import React from 'react';
import { Switch } from 'react-router-dom';

import CustomRoute from '../CustomRoute';
import HomePage from '../../pages/HomePage';

const routes = [
  { 
    component: HomePage, 
    exact: true, 
    path: '/' 
  }
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <CustomRoute {...route} key={route.path} />
      ))}
    </Switch>
  );
}

export default Routes;
