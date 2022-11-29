import React, { useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${active && styles.active}`}>
        <div>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.menu_btn}>
            <div
              className={`${styles.btn} ${active && styles.close}`}
              onClick={() => {
                setActive(!active);
              }}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.login}>
            <em>Login</em>
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${active && styles.active}`}>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </div>
        <div className={styles.movie_sort}>
          <ul>
            <li>
              <em>Latest Movie</em>
            </li>
            <li>
              <em>Highly Rated Movies</em>
            </li>
          </ul>
        </div>
        <div className={styles.genre}>
          <h2>GENRE</h2>
          <ul>
            <li>
              <em>Action Movie</em>
            </li>
            <li>
              <em>Fantasy Movie</em>
            </li>
            <li>
              <em>SF Movie</em>
            </li>
            <li>
              <em>Romance movie</em>
            </li>
            <li>
              <em>Horror Movie</em>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
