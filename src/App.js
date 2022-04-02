/** @format */
import React, { useState } from 'react';
import Field from './components/Field';
import Speakers from './components/Speakers';
import { data } from './data';

const App = () => {
  const [term, setTerm] = useState('')

  return (
    <div className="ui container">
      <div className="row">
    <Field label="filter un talend" value={term} onChange={setTerm} />
      </div>
      <div className="row">
        <Speakers data={data} term={term} />
      </div>
    </div>
  )
};

export default App;
