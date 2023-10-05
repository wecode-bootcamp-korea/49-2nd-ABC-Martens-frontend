import React, { useState } from 'react';
import './ProductImagesContent.scss';
import LeftImages from './ImagesContent/LeftImages';
import RightImages from './ImagesContent/RightImages';

const ProductImagesContent = ({ productInfo }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="productImagesContent">
      <LeftImages count={count} setCount={setCount} productInfo={productInfo} />
      <RightImages
        count={count}
        setCount={setCount}
        productInfo={productInfo}
      />
    </div>
  );
};

export default ProductImagesContent;
