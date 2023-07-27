import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import { HIDE_HEADER_FOOTER } from '../../config/const';
import './header.css';

export const Header = () => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  return HIDE_HEADER_FOOTER.includes(location.pathname) &&
    !searchParams.get('probatzen') ? (
    <></>
  ) : (
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
