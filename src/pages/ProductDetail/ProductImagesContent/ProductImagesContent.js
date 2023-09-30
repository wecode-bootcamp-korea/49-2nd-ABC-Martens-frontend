import React, { useState } from 'react';
import './ProductImagesContent.scss';
import LeftImages from './ImagesContent/LeftImages';
import RightImages from './ImagesContent/RightImages';

const ProductImagesContent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="productImagesContent">
      <LeftImages count={count} setCount={setCount} />
      <RightImages count={count} setCount={setCount} />
    </div>
  );
};

export default ProductImagesContent;
