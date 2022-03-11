import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import GameMain from './components/GameMain.js';
import AgentsIndex from './components/AgentsIndex';
import AgentShow from './components/AgentShow';
import Footer from './components/Footer';

//import { getAllAgents } from './lib/api';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamemain" element={<GameMain />} />
        <Route path="/agentsindex" element={<AgentsIndex />} />
        <Route path="/agents/:uuid" element={<AgentShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
