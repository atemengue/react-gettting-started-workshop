/** @format */

import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Message from '../components/Message';
import SpeakerDetail from '../components/SpeakerDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='speaker' element={<SpeakerDetail />}>
        <Route path=':idSpeaker' element={<SpeakerDetail />} />
      </Route>
      <Route path='message' element={<Message />} />
      <Route path='about' element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
