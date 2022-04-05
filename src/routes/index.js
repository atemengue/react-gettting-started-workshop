/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Message from '../components/Message';
import SpeakerDetail from '../components/SpeakerDetail';
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
