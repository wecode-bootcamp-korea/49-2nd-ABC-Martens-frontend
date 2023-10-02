import React from 'react';
import ProductDetailHome from './ProductDetailHome/ProductDetailHome';
import ProductImagesContent from './ProductImagesContent/ProductImagesContent';
import ProductOrder from './ProductOrder/ProductOrder';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="layoutBody">
        <ProductDetailHome />
        <div className="productsDiv">
          <div className="productDetailContent">
            <ProductImagesContent />
            <ProductOrder />
          </div>

          <div className="reviewContent" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
