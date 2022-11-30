import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

const Index = ({ grade }) => {
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
  return (
    <div className={styles.star_wrap}>
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
          <button>등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
