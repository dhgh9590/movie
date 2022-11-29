import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './style.module.css';

// import required modules
import { Navigation, Pagination } from 'swiper';

export default function App() {
  return (
    <div className={`${styles.container} slide1`}>
      <div className={styles.slider_wrap}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          slidesPerView={1}
          speed={1000}
          loop={true}
          pagination={{ clickable: true }}
          loopAdditionalSlides={1}
          className="mySwiper"
        >
          <div className={styles.slider}>
            <ul>
              <li>
                <SwiperSlide key={0}>
                  <div className={`${styles.slide} slide`}>
                    <div className={styles.img}>
                      <img src="/images/banner1.jpg" alt="" />
                    </div>
                    <div className={`${styles.grade} grade`}>
                      <em>
                        Grade : <strong>8.58</strong>/10
                      </em>
                    </div>
                    <h2>Pirates of the Caribbean: Dead Men Tell No Tales</h2>
                    <div className={`${styles.age} age`}>
                      <span>12+</span>
                    </div>
                    <div className={`${styles.info} info`}>
                      <ul>
                        <li>
                          <em>액션,모험,코미디,판타지</em>
                        </li>
                        <li>
                          <em>129분</em>
                        </li>
                        <li>
                          <em>2017.05.24</em>
                        </li>
                      </ul>
                    </div>
                    <p>
                      죽음마저 집어삼킨 복수가 시작된다! 전설적인 해적 캡틴 ‘잭
                      스패로우’(조니 뎁)의 눈 앞에 죽음마저 집어삼킨 바다의
                      학살자 ‘살라자르’(하비에르 바르뎀)가 복수를 위해 찾아온다.
                      둘 사이에 숨겨진 엄청난 비밀··· 잭은 자신과 동료들의
                      죽음에 맞서 살아남기 위해 사투를 시작하는데··· 지금, 모든
                      것을 압도할 거대한 전투가 펼쳐진다!
                    </p>
                    <div className={`${styles.actor} actor`}>
                      <em>
                        출연 : 출연조니 뎁(잭 스패로우), 하비에르
                        바르뎀(살라자르), 제프리 러쉬(헥터 바르보사)
                      </em>
                    </div>
                    <div className={`${styles.btn} btn`}>
                      <button>View</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={1}>
                  <div className={`${styles.slide} slide`}>
                    <div className={styles.img}>
                      <img src="/images/banner1.jpg" alt="" />
                    </div>
                    <div className={`${styles.grade} grade`}>
                      <em>
                        Grade : <strong>8.58</strong>/10
                      </em>
                    </div>
                    <h2>Pirates of the Caribbean: Dead Men Tell No Tales</h2>
                    <div className={`${styles.age} age`}>
                      <span>12+</span>
                    </div>
                    <div className={`${styles.info} info`}>
                      <ul>
                        <li>
                          <em>액션,모험,코미디,판타지</em>
                        </li>
                        <li>
                          <em>129분</em>
                        </li>
                        <li>
                          <em>2017.05.24</em>
                        </li>
                      </ul>
                    </div>
                    <p>
                      죽음마저 집어삼킨 복수가 시작된다! 전설적인 해적 캡틴 ‘잭
                      스패로우’(조니 뎁)의 눈 앞에 죽음마저 집어삼킨 바다의
                      학살자 ‘살라자르’(하비에르 바르뎀)가 복수를 위해 찾아온다.
                      둘 사이에 숨겨진 엄청난 비밀··· 잭은 자신과 동료들의
                      죽음에 맞서 살아남기 위해 사투를 시작하는데··· 지금, 모든
                      것을 압도할 거대한 전투가 펼쳐진다!
                    </p>
                    <div className={`${styles.actor} actor`}>
                      <em>
                        출연 : 출연조니 뎁(잭 스패로우), 하비에르
                        바르뎀(살라자르), 제프리 러쉬(헥터 바르보사)
                      </em>
                    </div>
                    <div className={`${styles.btn} btn`}>
                      <button>View</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={2}>
                  <div className={`${styles.slide} slide`}>
                    <div className={styles.img}>
                      <img src="/images/banner1.jpg" alt="" />
                    </div>
                    <div className={`${styles.grade} grade`}>
                      <em>
                        Grade : <strong>8.58</strong>/10
                      </em>
                    </div>
                    <h2>Pirates of the Caribbean: Dead Men Tell No Tales</h2>
                    <div className={`${styles.age} age`}>
                      <span>12+</span>
                    </div>
                    <div className={`${styles.info} info`}>
                      <ul>
                        <li>
                          <em>액션,모험,코미디,판타지</em>
                        </li>
                        <li>
                          <em>129분</em>
                        </li>
                        <li>
                          <em>2017.05.24</em>
                        </li>
                      </ul>
                    </div>
                    <p>
                      죽음마저 집어삼킨 복수가 시작된다! 전설적인 해적 캡틴 ‘잭
                      스패로우’(조니 뎁)의 눈 앞에 죽음마저 집어삼킨 바다의
                      학살자 ‘살라자르’(하비에르 바르뎀)가 복수를 위해 찾아온다.
                      둘 사이에 숨겨진 엄청난 비밀··· 잭은 자신과 동료들의
                      죽음에 맞서 살아남기 위해 사투를 시작하는데··· 지금, 모든
                      것을 압도할 거대한 전투가 펼쳐진다!
                    </p>
                    <div className={`${styles.actor} actor`}>
                      <em>
                        출연 : 출연조니 뎁(잭 스패로우), 하비에르
                        바르뎀(살라자르), 제프리 러쉬(헥터 바르보사)
                      </em>
                    </div>
                    <div className={`${styles.btn} btn`}>
                      <button>View</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
