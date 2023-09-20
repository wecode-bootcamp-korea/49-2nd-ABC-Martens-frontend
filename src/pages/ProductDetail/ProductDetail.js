import React from 'react';
import './ProductDetail.scss';
import ProductDetailHome from '../../components/ProductDetailHome/ProductDetailHome';
import ProductImagesContent from '../../components/ProductImagesContent/ProductImagesContent';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="layoutBody">
        <ProductDetailHome />
        <div className="productsDiv">
          <div className="productDetailContent">
            <ProductImagesContent />
            <div className="productDes">
              <div />
            </div>
          </div>
          <div className="reviewContent" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
