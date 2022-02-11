import { Card, Container, Header, Icon, Image } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';

import { GetErabiltzaileak } from '../api.js';
import moment from 'moment';

const Erabiltzailea = (props) => {
  const [user, setUser] = useState();
  const getErabiltzaileak = async (users) => {
    return await GetErabiltzaileak(users);
  };
  useEffect(() => {
    getErabiltzaileak([props.match.params.user]).then((response) => {
      setUser(response[0]);
    });
  }, []);
  return (
    <Container>
      <Header as="h1">{props.match.params.user}</Header>
      <Card>
        <Image
          src={user?.profile_image_url
            ?.replace('%{width}', 440)
            .replace('%{height}', 228)}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{user?.display_name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {moment(user?.created_at).format('YYYY/MM/DD')}
            </span>
          </Card.Meta>
          <Card.Description>{user?.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="eye" />
          {user?.view_count} ikustaldi
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Erabiltzailea;
