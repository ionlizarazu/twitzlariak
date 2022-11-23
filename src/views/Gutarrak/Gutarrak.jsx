import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import GutarraCard from '../../components/cards/GutarraCard';
import { dynamicSort } from '../../utils.js';
import { getErabiltzailearenBideoak } from '../../store/actions';

// import moment from 'moment';

const Gutarrak = (props) => {
  const dispatch = useDispatch();
  const erabiltzaileak = useSelector((state) => state.erabiltzaileak);
  const users = useSelector((state) => state.erabiltzaileak);
  const users_ref = useRef(users);
  useEffect(() => {
    if (users.items.length > 0) {
      users.items.map((user) => dispatch(getErabiltzailearenBideoak(user)));
    }
    users_ref.current = users;
  }, [dispatch]);
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
              .sort(dynamicSort('-view_count'))
              .map((user) => {
                return <GutarraCard user={user} />;
              })}
        </Card.Group>
      </Segment>
    </div>
  );
};

export default Gutarrak;
