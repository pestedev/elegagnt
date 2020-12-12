export default {
  ROUTE_HOME: '/',
};

// Sometime You need to replace dynamic url with :param
export const injectRouteParam = (route = '/', params = {}) => {
  return route
    .split('/')
    .map((eachSubRoute) => {
      if (eachSubRoute[0] === ':') {
        return params[eachSubRoute.slice(1, eachSubRoute.length)];
      }
      return eachSubRoute;
    })
    .join('/');
};
