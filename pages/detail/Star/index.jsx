import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import axios from 'axios';
import { userData } from '../../../src/context/user';
import { BASE_URL, URL } from '../../../src/constants/api';

const Index = ({ id, handleData }) => {
  const { userInfo } = useContext(userData);
  const [newArray, setNewArray] = useState(); //평점 목록
  const [userArray, setSuerArray] = useState(); //평점 사용자 목록
  const [user, setUser] = useState(); //사용자

  /* 별점 생성 */
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  let score = clicked.filter(Boolean).length; //별점 저장

  //서버로 데이터 전송
  const onSubmit = async () => {
    const copy = newArray && [...newArray];
    let userCopy = userArray && [...userArray];
    copy.push(`${score}`);
    userCopy.push(userInfo.uid);
    userCopy = new Set(userCopy); //평점 등록한 사용자 중복제거
    userCopy = Array.from(userCopy);
    setNewArray(copy);
    setSuerArray(userCopy);
    axios.put(`${BASE_URL}/${URL.EDIT}`, {
      id: id, //영화 id
      grade: copy, //평점
      grade_user: userCopy, //평점 등록한 사용자 목록
    });
    handleData();
  };

  //영화 목록 데이터 가지고 오기
  const onData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${URL.LIST}`);
      const data = res.data.movie;
      //영화 목록의 id와 현재 내가 클릭한 영화 id 비교해서 일치하면 반환함
      const add = data.filter(item => {
        return item.id == id;
      });
      setNewArray(add[0].grade); //평점 배열 저장
      setSuerArray(add[0].grade_user); //평점 등록한 사용자 배열 저장
    } catch (error) {
      console.log(error);
    }
  };

  //평점 등록한 사람과 현재 로그인한 사람이 동일한지 판단
  function userFilter() {
    let userCopy = userArray && [...userArray];
    const user =
      userCopy &&
      userCopy.filter(item => {
        return item == userInfo?.uid;
      });
    setUser(user);
  }

  useEffect(() => {
    handleData();
    userFilter();
  }, [newArray]);

  useEffect(() => {
    onData();
  }, []);

  return (
    <div className={styles.star_wrap}>
      {userInfo == null ? (
        <div>로그인을 하시면 평점 등록이 가능 합니다</div>
      ) : (
        <div>
          {user != userInfo?.uid ? (
            <div>
              <div>
                <em>별점을 선택해주세요.</em>
                <div className={styles.star}>
                  {array.map(el => {
                    return (
                      <FontAwesomeIcon
                        key={el}
                        icon={faStar}
                        onClick={() => {
                          handleStarClick(el);
                        }}
                        className={`${styles.star_icon} ${
                          clicked[el] && styles.active
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={styles.btn}>
                <button
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  등록하기
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.end}>
              <em>평점을 등록 하셨습니다</em>
            </div>
          )}
        </div>
      )}
      <div className={styles.member}>
        <em>{userArray && userArray.length}</em>
        <FontAwesomeIcon icon={faUsers} />
      </div>
    </div>
  );
};

Index.propTypes = {
  id: PropTypes.string,
  handleData: PropTypes.func,
};

export default Index;
