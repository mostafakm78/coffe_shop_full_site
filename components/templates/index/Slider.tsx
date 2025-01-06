import React from 'react';
import styles from '@/styles/Slider.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


function Slider() {

  return (
    <Swiper
      loop={true}
      navigation={true}
      modules={[Navigation , Autoplay]}
      className={styles.swiper}
      autoplay={{delay : 4000}}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            یک بار تجربه کنید
          </h2>
          <h1 className="display-1 text-white m-0">هات کافی</h1>
          <h2 className="text-white m-0">تاسیس ١٣٩٤</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/carousel-2.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            یک بار تجربه کنید
          </h2>
          <h1 className="display-1 text-white m-0">هات کافی</h1>
          <h2 className="text-white m-0">تاسیس ١٣٩٤</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
