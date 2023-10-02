import React from 'react';
import './Button.scss';

const Button = props => {
  const {
    children,
    className,
    sort,
    fontscale,
    scale,
    color,
    disabled,
    handleClick,
  } = props;

  return (
    <button
      type="button"
      className={className}
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
