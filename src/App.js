/** @format */
import React, { useState } from 'react';
import Field from './components/Field';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Speakers from './components/Speakers';
import { data } from './data';

function App() {
  const [term, setTerm] = useState('');
  return (
    <div className='ui'>
      <Header />
      <div className='ui container'>
        <Field value={term} onChange={setTerm} />
        <Speakers term={term} data={data} />
      </div>
      <div class='ui divider'></div>
      <Footer />
    </div>
  );
}

export default App;
