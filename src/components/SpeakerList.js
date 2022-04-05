/** @format */

import React from 'react';
import Speaker from './Speaker';

const SpeakerList = ({ speakers }) => {
  const keys = Object.keys(speakers);

  return (
    <div className='ui container'>
      <div className='ui grid'>
        {keys.map((key, index) => {
          return (
            <div className='four wide column' key={index} md='3'>
              <Speaker {...speakers[key]} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
