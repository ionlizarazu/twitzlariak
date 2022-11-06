import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {
  Card,
  // Container,
  // Icon,
  // Image,
  Loader,
  Dimmer,
  Segment,
} from 'semantic-ui-react';

import GutarraCard from '../cards/GutarraCard';
import { dynamicSort } from '../utils.js';

// import moment from 'moment';

const Gutarrak = (props) => {
  const erabiltzaileak = useSelector((state) => state.erabiltzaileak);

  return (
    <div>
      <h1>Gutarrak</h1>
      <Segment basic>
        <Card.Group itemsPerRow={6} doubling>
          <Dimmer active={erabiltzaileak.loading} inverted>
            <Loader>Bagatoz...</Loader>
          </Dimmer>
          {erabiltzaileak.loaded &&
            erabiltzaileak.items
              .sort(dynamicSort('display_name'))
              .map((user) => {
                return <GutarraCard user={user} />;
              })}
        </Card.Group>
      </Segment>
    </div>
  );
};

export default Gutarrak;
