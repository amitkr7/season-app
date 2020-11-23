import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Error from './Error';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();
  let content;
  if (errorMessage) {
    content = <Error error={errorMessage} />;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message='Please allow access to location' />;
  }

  return <div className='red border'>{content}</div>;
};

export default App;
