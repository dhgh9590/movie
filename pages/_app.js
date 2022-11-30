import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/reset.css';
import '../styles/globals.css';
import NavBar from '../src/components/NavBar';
import axios from 'axios';
import { movieData } from '../src/context/data';
import { BASE_URL, URL } from '../src/constants/api';
function MyApp({ Component, pageProps }) {
  const [movieList, setMovieList] = useState();

  const handleData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${URL.LIST}`);
      setMovieList(res.data.movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="container">
      <NavBar></NavBar>
      <movieData.Provider value={{ movieList, setMovieList }}>
        <Component {...pageProps} />
      </movieData.Provider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
