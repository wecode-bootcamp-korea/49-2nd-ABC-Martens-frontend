import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailHome from './ProductDetailHome/ProductDetailHome';
import ProductImagesContent from './ProductImagesContent/ProductImagesContent';
import ProductOrder from './ProductOrder/ProductOrder';
// import { HOST } from '../../components/Variable/Variable';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.241:8000/goods/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [id]);

  const isEmpty = Object.keys(productInfo).length > 0;

  if (!isEmpty) {
    return null;
  }
  return (
    <div className="productDetail">
      <div className="layoutBody">
        <ProductDetailHome />
        <div className="productsDiv">
          <div className="productDetailContent">
            <ProductImagesContent productInfo={productInfo} />
            <ProductOrder productInfo={productInfo} />
          </div>

          <div className="reviewContent" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
