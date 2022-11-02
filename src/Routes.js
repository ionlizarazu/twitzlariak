import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import './App.css';
import { Bilatzailea, Erabiltzailea, Gutarrak, Portada } from './views';

import 'semantic-ui-css/semantic.min.css';

// import { BrowserRouter as Router } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route exact path="/" element={<Portada />}></Route>
        <Route exact path="/bilatzailea" element={<Bilatzailea />}></Route>
        <Route exact path="/gutarrak" element={<Gutarrak />}></Route>
        <Route path="/gutarrak/:user" element={<Erabiltzailea />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
