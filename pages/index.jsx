import React from 'react';
import styles from '../styles/Home.module.css';
import Banner from '../pages/Main/Banner';

/* prop 타입체크 */
// import PropTypes from 'prop-types';

/* 폰트어썸 */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <Banner></Banner>
      </section>
    </main>
  );
};

/*
Index.propTypes = {
  prop이름: PropTypes.array,
};
*/

export default Home;
