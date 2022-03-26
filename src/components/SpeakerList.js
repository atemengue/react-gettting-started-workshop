/** @format */

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Speaker from './Speaker';

const SpeakerList = ({ speakers }) => {
  const keys = Object.keys(speakers);

  return (
    <Container>
      <Row>
        {keys.map((key, index) => {
          return (
            <Col key={index} className='m-3' md='3'>
              <Speaker {...speakers[key]} key={index} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SpeakerList;
