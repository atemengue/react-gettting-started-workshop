/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Message from './Message';
import SpeakerDetail from './SpeakerDetail';
// import your route components too

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='about' element={<About />}>
          <Route path=':idSpeaker' element={<SpeakerDetail />} />
          <Route path='message' element={<Message />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
