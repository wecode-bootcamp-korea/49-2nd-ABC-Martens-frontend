import React from 'react';
import './LeftImages.scss';

const LeftImages = () => {
  return (
    <div className="leftImages">
      <div>
        <div className="swiper swiper-initialized swiper-backface-hidden swiper-horizontal">
          <div className="swiperWrapper">
            <div className="swiperSlide">
              <img src="/images/boots/male/boots.jpg" alt="상품이미지" />
              <img src="/images/boots/male/boots3.jpg" alt="상품이미지" />
              <img src="/images/boots/male/boots4.jpg" alt="상품이미지" />
              <img src="/images/boots/male/boots6.jpg" alt="상품이미지" />
              <img src="/images/boots/male/boots8.jpg" alt="상품이미지" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImages;
