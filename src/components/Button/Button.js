import React from 'react';
import './Button.scss';

const Button = props => {
  const { children, sort, fontScale, scale, color, disabled, handleClick } =
    props;

  return (
    <button
      type="button"
      sort={sort}
      fontScale={fontScale}
      scale={scale}
      color={color}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
