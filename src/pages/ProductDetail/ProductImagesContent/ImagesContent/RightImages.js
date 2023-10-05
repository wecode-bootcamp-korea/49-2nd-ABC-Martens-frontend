import React from 'react';
import './RightImages.scss';

const RightImages = ({ count, setCount, productInfo }) => {
  const imageData = productInfo.detailImageSelector;

  const prevBtn = () => {
    const minusCount = count => (count > 0 ? count - 1 : null);
    setCount(minusCount);
  };

  const nextBtn = () => {
    const plusCount = count =>
      count < imageData.length - 1 ? count + 1 : (count = 0);
    setCount(plusCount);
  };

  return (
    <div className="rightImages">
      <div className="swiperSlide">
        {imageData?.map((list, index) => {
          return (
            <div
              className="swiperSlider"
              key={list.detail_image_url}
              style={{ transform: `translateX(${count * -560}px)` }}
            >
              <img src={list.detail_image_url} alt="상품이미지" index={index} />
            </div>
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
      </div>
    </div>
  );
};

export default RightImages;
