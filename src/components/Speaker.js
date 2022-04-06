/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../App';
import ImageSpeaker from './ImageSpeaker';

const Speaker = ({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,
}) => {
  const context = useContext(ConfigContext);

  return (
    <Link to={`/speaker/${id}`} className='ui card'>
      <ImageSpeaker
        secondaryImage={`images/bw/bw.png`}
        primaryImage={`images/speaker-${id}.png`}
      />
      <div className='content'>
        <a href='#' className='header'>
          {first} - {last}
        </a>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i>@{twitterHandle}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <a href='#'>
          <i className='bullhorn icon'></i>
          {sessions.length}
        </a>
      </div>
      {context.showSpeakerSpeakingDays && (
        <div className='extra content'>Speaking data Ici</div>
      )}
    </Link>
  );
};

export default Speaker;
