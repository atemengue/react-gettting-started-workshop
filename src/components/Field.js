/** @format */

import React from 'react';
import Input, { Form } from 'react-bootstrap/';

export default ({ label, value, onChange }) => {


  return (
    <form className="ui fluid form">
      <div className="field">
        <input
          className="ui input"
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder='Veuillez entrez un nom'
        />
        </div>

    </form>
  );
};
