import React from 'react';
import './ProductImagesContent.scss';
import LeftImages from './ImagesContent/LeftImages';
import RightImages from './ImagesContent/RightImages';

const ProductImagesContent = () => {
  return (
    <div className="productImagesContent">
      <LeftImages />
      <RightImages />
    </div>
  );
};

export default ProductImagesContent;
