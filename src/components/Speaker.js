/** @format */

import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export default ({ first, last, company, bio, id, twitterHandle }) => {
  return (
    <div className="ui card" style={{ width: '18rem' }}>
      <div className="image">
      <img src={`/images/speaker-${id}.jpg`} />
      </div>
      <div className="content">
        <div className="header">
          {first} {last}
        </div>
        <div className="description">{bio}</div>
        <div className='extra content'>
          <div className='company'>
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className='twitter'>
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
