/** @format */

import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export default ({ first, last, company, bio, id, twitterHandle }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={`/images/speaker-${id}.png`} />
      <Card.Body>
        <Card.Title>
          {first} {last}
        </Card.Title>
        <Card.Text>{bio}</Card.Text>
        <div className='d-flex justify-content-between'>
          <div className='company'>
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className='twitter'>
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
