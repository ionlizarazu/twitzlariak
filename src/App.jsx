import React from 'react';
// import Routes from './Routes';
import initialLoader from './helpers/initialLoader';
import { Outlet } from 'react-router-dom';
import { Header as AppHeader } from './components/Header';
import { Footer as AppFooter } from './components/Footer';
function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default initialLoader(App);
