import React from 'react';
import './Button.scss';

const Button = props => {
  const { children, sort, fontscale, scale, color, disabled, handleClick } =
    props;

  return (
    <button
      type="button"
      sort={sort}
      fontscale={fontscale}
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
