/** @format */

import React from 'react';

const Field = ({ label, value, onChange }) => {
  return (
    <div class='ui icon input'>
      <i class='search icon'></i>
      <input
        type='text'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Faite un filter...'
      />
    </div>
  );
};

export default Field;
