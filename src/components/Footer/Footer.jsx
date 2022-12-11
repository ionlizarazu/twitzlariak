import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container, List, Grid, Header, Segment } from 'semantic-ui-react';

import { HIDE_HEADER_FOOTER } from '../../config/const';
import './footer.css';

export const Footer = () => {
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  return HIDE_HEADER_FOOTER.includes(location.pathname) &&
    !searchParams.get('probatzen') ? (
    <></>
  ) : (
    <Segment vertical className="footer">
      <Container>
        <Grid divided stackable>
          <Grid.Column width={8}>
            <Header inverted as="h4" content="Informazio orokorra" />
            <p>
              Posible da hemen streamer euskaldun guztiak ez agertzea, eta agian
              norbait aktibo ez egotea. Dena den, noizbait zuzenekoren bat
              euskaraz egin duen oro zerrendan gehitzeko saiakera egon da.
              Norbait falta dela ikusten baduzu mesedez jakinarazi.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as="h4" content="Niri buruz:" />
            <List>
              <List.Item>
                <List.Icon name="twitter"></List.Icon>
                <List.Content>
                  <a href="https://www.twitter.com/ionliz">@ionliz</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="twitch"></List.Icon>
                <List.Content>
                  <a href="https://www.twitch.com/ionliz">@ionliz</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github"></List.Icon>
                <List.Content>
                  <a href="https://www.github.com/ionlizarazu">@ionlizarazu</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};
