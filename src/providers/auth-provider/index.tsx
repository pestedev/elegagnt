import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import urls from 'providers/routes-provider/routes/urls';

import gate from 'gate';

import token from 'helpers/token';
import history from 'helpers/History';

const needUser = (pathname) => {
  // in some routes, you dont need to call fetch user, like login page
  /* switch (pathname) {
    case urls.ROUTE_AUTH:
      return false;
    default:
      return true;
  } */
  return true;
};

const StartupRequests = ({children}) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  // Get User From redux
  // const {user} = useSelector(selectUser);

  React.useEffect(() => {
    // Fill Redux With Initial Data
    // if (needUser(pathname) && !user) _fetchAuth();
  }, []);

  const logOut = () => {
    token.clear();
    // Remove Token From Store (But avoid to save token into Store)
    // dispatch(logoutSuccess());
    history.push('/auth');
  };

  /* const _fetchAuth = async () => {
    // Set Loading page here
    try {
      const result = await gate.getUser();
      if (result.userType === 0) logOut();
      dispatch(fill_user({...result}));
      if (result.userType === USER_TYPES.patient) {
        const patientResult = await gate.getPatientInformations();
        dispatch(fill_user({...patientResult}));
      }
      if (result.userType === USER_TYPES.doctor) {
        const doctorResult = await gate.getDoctorInformations();
        dispatch(fill_user({...doctorResult}));
      }
      // Finish Loading
      //Fill Redux
    } catch (e) {
      if (!window.location.href.includes('/auth')) {
        logOut();
        // Also Finish Loading When Fetch fail
      }
    }
  }; */
  return <>{children}</>;
};

export default StartupRequests;
