import {
  Card,
  // Container,
  Icon,
  Image,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import React from 'react';

import { dynamicSort } from '../utils.js';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Gutarrak = (props) => {
  const erabiltzaileak = useSelector((state) => state.erabiltzaileak);

  return (
    <div>
      <h1>Gutarrak</h1>
      <Card.Group itemsPerRow={6} doubling>
        <Dimmer active={erabiltzaileak.loading} inverted>
          <Loader>Bagatoz...</Loader>
        </Dimmer>
        {erabiltzaileak.loaded &&
          erabiltzaileak.items.sort(dynamicSort('display_name')).map((user) => {
            return (
              <Card>
                <Image
                  src={user?.profile_image_url
                    ?.replace('%{width}', 440)
                    .replace('%{height}', 228)}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <Link to={`/gutarrak/${user?.display_name}`}>
                      {user?.display_name}
                    </Link>
                  </Card.Header>
                  <Card.Meta>
                    <span className="date">
                      {moment(user?.created_at).format('YYYY/MM/DD')}
                    </span>
                  </Card.Meta>
                  {user?.description && (
                    <Card.Description>
                      {user?.description.substring(0, 55)}...
                    </Card.Description>
                  )}
                </Card.Content>
                <Card.Content extra>
                  <Icon name="eye" />
                  {user?.view_count} ikustaldi
                </Card.Content>
              </Card>
            );
          })}
      </Card.Group>
    </div>
  );
};

export default Gutarrak;
