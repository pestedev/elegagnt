import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from './routes';
const RoutesProvider = ({children}) => {
  return (
    <>
      <Switch>
        {routes.map(({component, exact, path}, i) => (
          <Route key={i} component={component} path={path} exact={exact} />
        ))}
      </Switch>
      {children}
    </>
  );
};
export default RoutesProvider;
