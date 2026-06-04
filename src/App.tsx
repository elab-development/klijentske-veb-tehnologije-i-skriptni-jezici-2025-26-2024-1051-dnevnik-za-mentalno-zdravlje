//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Group } from './components/Group';
import { GroupWrapper } from './components/GroupWrapper';

import { Pocetna } from './screens/Pocetna';
import { Pitalice } from './screens/Pitalice';
import { Dnevnik } from './screens/Dnevnik';
import { Profil } from './screens/Profil';
import { Blog } from './screens/Blog';
import { Pisanje_Bloga } from './screens/Pisanje_Bloga';
import { Prijava } from './screens/Prijava';
import { Registracija } from './screens/Registracija';

import './App.css';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100px' }}>
    
        <Group className="" />

        <main style={{ flex: 1 }}> 
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Pisanje_Bloga" element={<Pisanje_Bloga />} />
            <Route path="/dnevnik" element={<Dnevnik />} />
            <Route path="/pitalice" element={<Pitalice />} />
            <Route path="/prijava" element={<Prijava />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/registracija" element={<Registracija />} />
            </Routes>
        </main>
        <GroupWrapper className=""/>
      </div>
    </Router>
  );
};

export default App;