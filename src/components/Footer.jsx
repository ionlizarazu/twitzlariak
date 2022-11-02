import React from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';

export const Footer = () => {
  return (
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
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};
