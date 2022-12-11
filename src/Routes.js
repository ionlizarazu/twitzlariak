import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import './App.css';
import {
  Bilatzailea,
  Erabiltzailea,
  Gutarrak,
  Portada,
  Zuzenean,
  Tresnak,
} from './views';

import 'semantic-ui-css/semantic.min.css';

// import { BrowserRouter as Router } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route exact path="/" element={<Portada />}></Route>
        <Route exact path="/bilatzailea" element={<Bilatzailea />}></Route>
        <Route
          basename="/"
          exact
          path="/tresnak"
          showHeader={false}
          element={<Tresnak />}
        ></Route>
        <Route
          basename="/"
          exact
          path="/tresnak/zuzenean"
          showHeader={false}
          element={<Zuzenean />}
        ></Route>
        <Route
          basename="/"
          exact
          path="/gutarrak"
          element={<Gutarrak />}
        ></Route>
        <Route
          basename="/"
          path="/gutarrak/:user"
          element={<Erabiltzailea />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
