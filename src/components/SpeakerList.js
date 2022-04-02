/** @format */

import React from 'react';
import Speaker from './Speaker';

const SpeakerList = ({ speakers }) => {
  const keys = Object.keys(speakers);

  return (
    <div className="ui grid">
        {keys.map((key, index) => {
          return (
            <div key={index} cclassName="four wide column">
              <Speaker {...speakers[key]} key={index} />
            </div>
          );
        })}
        </div>
  );
};

export default SpeakerList;
