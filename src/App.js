import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import GameMain from './components/GameMain.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamemain" element={<GameMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
