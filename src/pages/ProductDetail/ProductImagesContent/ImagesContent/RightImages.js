import React, { useState, useEffect } from 'react';
import './RightImages.scss';

const RightImages = ({ count, setCount, productList }) => {
  const [imageData, setImageData] = useState([]);

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

  // setImageData(productList.detailImageSelector);

  return (
    <div className="rightImages">
      <div className="swiperSlide">
        {imageData?.map((list, index) => {
          return (
            <div
              className="swiperSlider"
              key={list.id}
              style={{ transform: `translateX(${count * -560}px)` }}
            >
              <img src={list.url} alt={list.alt} index={index} />
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
