import React from 'react';
import './ProductDetailHome.scss';

const ProductDetailHome = () => {
  return (
    <div className="productDetailHome">
      <div className="productRoute">
        <div className="spanRoute">
          <span>
            <a className="homeTag" href="/">
              HOME
            </a>
          </span>
          <span>
            <a className="category" href="#!">
              남성
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHome;
