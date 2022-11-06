import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import './header.css';
import { useLocation } from 'react-router-dom';
export const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location.pathname]);
  return (
    <div className="header">
      {location.pathname === '/' && <h1>Twitch euskaraz</h1>}
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
