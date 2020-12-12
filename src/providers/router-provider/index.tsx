import React from 'react';
import history from 'helpers/History';
import {Router} from 'react-router-dom';

const RouterProvider = ({children}) => {
  return <Router history={history}>{children}</Router>;
};
export default RouterProvider;
