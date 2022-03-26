/** @format */

import React from 'react';
import Input, { Form } from 'react-bootstrap/';

export default ({ label, value, onChange }) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e.target.value)}
          type='text'
          value={value}
          placeholder='Veuillez entrez un nom'
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  );
};
