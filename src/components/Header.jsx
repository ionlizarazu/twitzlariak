import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <Menu inverted>
        <Container>
          <Menu.Item as={Link} to="/">
            Hasierako orria
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/bilatzailea">
            Bilatzailea
          </Menu.Item> */}
          <Menu.Item as={Link} to="/gutarrak">
            Gutarrak
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
