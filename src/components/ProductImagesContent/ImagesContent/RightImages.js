import React, { useState, useEffect } from 'react';
import './RightImages.scss';

const RightImages = () => {
  const [imageData, setImageData] = useState([]);

  const [count, setCount] = useState(0);

  const prevBtn = () => {
    setCount(count => (count > 0 ? count - 1 : null));
  };

  const nextBtn = () => {
    setCount(count => (count < 10 ? count + 1 : (count = 0)));
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/imageData.json')
      .then(Response => Response.json())
      .then(result => setImageData(result));
  }, []);

  return (
    <div className="rightImages">
      <div className="swiperSlide">
        {imageData?.map((list, index) => {
          return (
            <div
              className="swiperSlider"
              key={list.alt}
              style={{ transform: `translateX(${count * -560}px)` }}
            >
              <img src={list.src} alt={list.alt} index={index} />
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
