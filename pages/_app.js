import React from 'react';
import PropTypes from 'prop-types';
import '../styles/reset.css';
import '../styles/globals.css';
import NavBar from '../src/components/NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
