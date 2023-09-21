import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  const { checked, onChange, children } = props;

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
