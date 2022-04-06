/** @format */

import React, { useRef } from 'react';

export default function ImageSpeaker({ primaryImage, secondaryImage }) {
  const imageRef = useRef(null);
  return (
    <img
      ref={imageRef}
      onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }}
      alt=''
      src={primaryImage}
      onMouseOut={() => {
        imageRef.current.src = primaryImage;
      }}
    />
  );
}
