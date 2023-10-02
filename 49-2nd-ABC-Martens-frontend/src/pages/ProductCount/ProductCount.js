import React, { useState } from 'react';
import './ProductCount.scss';

const ProductCount = () => {
  const [count, setCount] = useState(1);
  return <div>수량 카운트</div>;
};
export default ProductCount;
