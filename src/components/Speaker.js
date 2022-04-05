/** @format */

import React from 'react';

const Speaker = ({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,
}) => {
  return (
    <div className='ui card'>
      <div className='image'>
        <img alt='' src={`images/speaker-${id}.png`} />
      </div>
      <div className='content'>
        <a href='#' className='header'>
          {first} - {last}
        </a>

        <div className='description'>{bio}</div>
        <div className='meta'>
          <div class='ui grid'>
            <div class='wide column'>
              <span>
                <i className='home icon'></i>
                {company}
              </span>
            </div>
            <div class='wide column'>
              <span>
                <i className='home icon'></i>
                {company}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='extra content'>
        <a href='#'>
          <i className='bullhorn icon'></i>
          {sessions.length}
        </a>
      </div>
    </div>
  );
};

export default Speaker;
