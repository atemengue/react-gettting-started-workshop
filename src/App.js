/** @format */

import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './routes';

const ConfigContext = React.createContext();

const configValue = {
  showSpeakerSpeakingDays: true,
};

// import your route components too
function App() {
  return (
    <ConfigContext.Provider value={configValue}>
      <div className='ui'>
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
