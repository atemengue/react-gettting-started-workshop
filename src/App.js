/** @format */

import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './routes';

export const ConfigContext = React.createContext();

const configValue = {
  showSpeakerSpeakingDays: false,
};

// import your route components too
function App() {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>
        <div className='ui horizontal  masthead aligned segment'>
          <h1 class='ui header'>React WorkShop</h1>
        </div>
        <Header />
        <div className='ui container'>
          <AppRoutes />
        </div>
        <div className='ui divider'>
          <Footer />
        </div>
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
