import React from 'react';
// import Routes from './Routes';
import initialLoader from './helpers/initialLoader';
import { Outlet } from 'react-router-dom';
import { Header as AppHeader, Footer as AppFooter } from './components';

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
