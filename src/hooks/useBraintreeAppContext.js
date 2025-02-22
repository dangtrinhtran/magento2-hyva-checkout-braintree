import { useContext } from 'react';

import AppContext from '../../../../context/App/AppContext';

export default function useBraintreeAppContext() {
  const [
    { isLoggedIn, stateList, countryList },
    { setErrorMessage, setPageLoader, appDispatch },
  ] = useContext(AppContext);

  return {
    isLoggedIn,
    stateList,
    countryList,
    setErrorMessage,
    setPageLoader,
    appDispatch,
  };
}
