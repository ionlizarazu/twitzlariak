import './App.css';
import 'semantic-ui-css/semantic.min.css';

// import { BrowserRouter as Router } from 'react-router-dom';
import { Bilatzailea, Erabiltzailea, Gutarrak, Portada } from './views';
import { Container, Grid, Header, Menu, Segment } from 'semantic-ui-react';
import { Link, Route, HashRouter as Router, Switch } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router basename={'/'}>
      <Menu inverted>
        <Container>
          <Menu.Item as={Link} to="/">
            Hasierako orria
          </Menu.Item>
          <Menu.Item as={Link} to="/bilatzailea">
            Bilatzailea
          </Menu.Item>
          <Menu.Item as={Link} to="/gutarrak">
            Gutarrak
          </Menu.Item>
        </Container>
      </Menu>
      <Switch>
        <Route exact path="/">
          <Portada />
        </Route>
        <Route exact path="/bilatzailea">
          <Bilatzailea />
        </Route>
        <Route exact path="/gutarrak">
          <Gutarrak />
        </Route>
        <Route exact path="/gutarrak/:user" component={Erabiltzailea}></Route>
      </Switch>
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={8}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </Router>
  );
}

export default App;
