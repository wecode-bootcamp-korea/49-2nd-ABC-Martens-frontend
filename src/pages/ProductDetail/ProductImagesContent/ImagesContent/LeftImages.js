import React, { useState, useEffect } from 'react';
import './LeftImages.scss';

const LeftImages = ({ count, productList }) => {
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
              {imageData?.map((list, index) => {
                let indexCheck;
                if (index === count) {
                  indexCheck = 'realImageWrapper';
                } else {
                  indexCheck = 'imageWrapper';
                }
                return (
                  <div className="swiperSlide" key={list.id}>
                    <div className={indexCheck}>
                      <img src={list.url} alt={list.alt} />
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
