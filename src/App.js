/** @format */

import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './routes';

// import your route components too
function App() {
  return (
    <div className='ui'>
      <Header />
      <div className='ui container'>
        <AppRoutes />
      </div>
      <div className='ui divider'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
