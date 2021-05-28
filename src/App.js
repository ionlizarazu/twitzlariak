import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon } from 'semantic-ui-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Bilatzailea from './Bilatzailea';
import Zuzenean from './Zuzenean';
function App() {
  return (
    <Router>
      <Menu inverted>
        <Container>
          <Menu.Item as={Link} to='/bilatzailea'>
            Home
            </Menu.Item>
          <Menu.Item as={Link} to='/zuzenean' header>
            <Icon circular inverted size='tiny' color='red' name='record' />
              Zuzenean
            </Menu.Item>
        </Container>
      </Menu>
      <Switch>
        <Route path="/bilatzailea">
          <Bilatzailea />
        </Route>
        <Route path="/zuzenean">
          <Zuzenean />
        </Route>
        <Route path="/">
          <div>Homepage</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
