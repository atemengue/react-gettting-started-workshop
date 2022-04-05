/** @format */

import React, { useState } from 'react';
import Field from '../components/Field';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import Speakers from '../components/Speakers';
import { data } from '../data';

const Home = () => {
  const [term, setTerm] = useState('');

  return (
    <div className='ui container'>
      <Field value={term} onChange={setTerm} />
      <div className='ui divider hidden'></div>
      <Speakers term={term} data={data} />
    </div>
  );
};
export default Home;
