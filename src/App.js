/** @format */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Field from './components/Field';
import { data } from './data';
import Speakers from './components/Speakers';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Container>
      <Row>
        <Col>
          <Field
            label='Recherche un nom'
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <Speakers data={data} term={searchTerm} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
