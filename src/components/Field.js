/** @format */

import React from 'react';

const Field = ({ label, value, onChange }) => {
  return (
    <div class='ui category search'>
      <div class='ui icon input'>
        <i class='search icon'></i>
        <input
          type='text'
          onChange={(e) => onChange(e.target.value)}
          placeholder='Type here...'
        />
      </div>
      <div class='ui hidden divider'></div>
    </div>
  );
};

export default Field;
