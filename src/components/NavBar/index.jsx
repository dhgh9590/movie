import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { PATH } from '../../context/path';
import { onLogin, onLogout, onUserStateChange } from '../../constants/firebase';

const Index = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(); // state를 만들고

  //로그인 함수
  const handleLogin = () => {
    onLogin();
  };

  //로그아웃 함수
  const handleLogout = () => {
    onLogout();
  };

  //사용자 정보 저장(새로고침 해도 기억됨)
  useEffect(() => {
    onUserStateChange(user => {
      setUser(user);
    });
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${active && styles.active}`}>
        <div>
          <div
            className={styles.logo}
            onClick={() => {
              router.push(PATH.HOME);
            }}
          >
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
          {!user ? (
            <div className={styles.login} onClick={handleLogin}>
              <em>Login</em>
            </div>
          ) : (
            <div className={styles.logout} onClick={handleLogout}>
              <div className={styles.user_img}>
                <img src={user.photoURL} alt="" />
              </div>
              <h4>{user.displayName}</h4>
              <em>Logout</em>
            </div>
          )}
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
