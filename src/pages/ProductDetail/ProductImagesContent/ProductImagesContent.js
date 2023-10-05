import React, { useState } from 'react';
import './ProductImagesContent.scss';
import LeftImages from './ImagesContent/LeftImages';
import RightImages from './ImagesContent/RightImages';

const ProductImagesContent = ({ productList }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="productImagesContent">
      <LeftImages count={count} setCount={setCount} productList={productList} />
      <RightImages
        count={count}
        setCount={setCount}
        productList={productList}
      />
    </div>
  );
};

export default ProductImagesContent;
