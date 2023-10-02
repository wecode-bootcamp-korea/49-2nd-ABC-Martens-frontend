import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  const { id, checked, onChange, children } = props;

  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
