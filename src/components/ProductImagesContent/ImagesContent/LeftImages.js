import React, { useState, useEffect } from 'react';
import './LeftImages.scss';

const LeftImages = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/imageData.json')
      .then(Response => Response.json())
      .then(result => setImageData(result));
  }, []);

  return (
    <div className="leftImages">
      <div>
        <div className="swiper">
          <div className="swiperWrapper">
            <div className="swiperSlide">
              {imageData?.map(list => {
                return (
                  <div className="swiperSlide" key={list.alt}>
                    <img src={list.src} alt={list.alt} />
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
