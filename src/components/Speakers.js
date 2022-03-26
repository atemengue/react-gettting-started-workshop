/** @format */

import pickBy from 'lodash.pickby';
import React from 'react';
import SpeakerList from './SpeakerList';

export default ({ data, term }) => {
  // Function pour filter les speakers
  const filterSpeakers = (items) => {
    let spearkers = items;

    if (term) {
      spearkers = pickBy(spearkers, (value, key) => {
        return (
          value.first.match(term) ||
          value.last.match(term) ||
          value.company.match(term) ||
          value.bio.match(term)
        );
      });
    }
    return spearkers;
  };

  return <SpeakerList speakers={filterSpeakers(data)} />;
};
