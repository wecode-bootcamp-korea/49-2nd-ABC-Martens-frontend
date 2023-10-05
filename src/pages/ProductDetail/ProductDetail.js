import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailHome from './ProductDetailHome/ProductDetailHome';
import ProductImagesContent from './ProductImagesContent/ProductImagesContent';
import ProductOrder from './ProductOrder/ProductOrder';
import { HOST } from '../../components/Variable/Variable';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productList, setProductList] = useState({
    productId: 1,
    description: '',
    salePercentage: '30',
    productName: '1461 모노',
    images: ['imageurl', 'imageurl2', 'imageurl3'],
    quantity: [100, 100, 100],
    options: [230, 240, 250],
    originalPrice: '210000',
    price: '170000',
  });
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`${HOST}/goods/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }, [id]);

  if (!productList) {
    return null;
  }

  return (
    <div className="productDetail">
      <div className="layoutBody">
        <ProductDetailHome />
        <div className="productsDiv">
          <div className="productDetailContent">
            <ProductImagesContent />
            <ProductOrder productList={productList} />
          </div>

          <div className="reviewContent" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
