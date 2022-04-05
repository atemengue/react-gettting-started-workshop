/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='ui menu'>
      <Link to='/' className='active item'>
        Acceuil
      </Link>
      <Link to='/message' className='item'>
        Laisser un message{' '}
      </Link>
      <Link to='/about' className='item'>
        A propos
      </Link>
    </div>
  );
}
