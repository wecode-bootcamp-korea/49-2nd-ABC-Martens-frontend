import React, { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RightImages.scss';

const RightImages = ({ count, setCount }) => {
  const [imageData, setImageData] = useState([]);

  // const [count, setCount] = useState(0);

  const prevBtn = () => {
    const minusCount = count => (count > 0 ? count - 1 : null);
    setCount(minusCount);
  };

  const nextBtn = () => {
    const plusCount = count => (count < 10 ? count + 1 : (count = 0));
    setCount(plusCount);
  };

  useEffect(() => {
    fetch('/data/imageData.json')
      .then(Response => Response.json())
      .then(result => setImageData(result));
  }, []);

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      // const currentIndex = swiperRef.current.swiper.activeIndex;
      console.log('Current slide index:', swiperRef.current.activeIndex);
      setCount(swiperRef.current.activeIndex);
    }
  };

  return (
    <div className="rightImages">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {imageData?.map((list, index) => {
          return (
            <SwiperSlide
              key={list.id}
              // style={{ transform: `translateX(${count * -560}px)` }}
            >
              <img src={list.url} alt={list.alt} index={index} />
            </SwiperSlide>
          );
        })}
        <button className="prev" onClick={prevBtn}>
          〈
        </button>
        <button className="next" onClick={nextBtn}>
          〉
        </button>
        <div className="chapter">
          <p>
            {count + 1} / {imageData.length}
          </p>
        </div>
      </Swiper>
    </div>
  );
};

export default RightImages;
