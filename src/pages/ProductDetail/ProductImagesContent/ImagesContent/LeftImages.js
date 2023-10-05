import React from 'react';
import './LeftImages.scss';

const LeftImages = ({ count, productInfo }) => {
  const imageData = productInfo.detailImageSelector;

  return (
    <div className="leftImages">
      <div>
        <div className="swiper">
          <div className="swiperWrapper">
            <div className="swiperSlide">
              {imageData?.map((list, index) => {
                let indexCheck;
                if (index === count) {
                  indexCheck = 'realImageWrapper';
                } else {
                  indexCheck = 'imageWrapper';
                }
                return (
                  <div className="swiperSlide" key={list.detail_image_url}>
                    <div className={indexCheck}>
                      <img src={list.detail_image_url} alt="상품이미지" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImages;
