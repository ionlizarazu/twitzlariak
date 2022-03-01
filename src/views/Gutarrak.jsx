import { Card, Container, Header, Icon, Image } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';

import { GetErabiltzaileak } from '../api.js';
import { dynamicSort } from '../utils.js';
import moment from 'moment';
import twitzlariak from '../twitzlariak.json';
import { Link } from 'react-router-dom';

const Gutarrak = (props) => {
  const [users, setUsers] = useState([]);
  const getErabiltzaileak = async (users) => {
    return await GetErabiltzaileak(users);
  };
  useEffect(() => {
    getErabiltzaileak(twitzlariak.twitzlariak).then((response) => {
      setUsers(response);
    });
  }, []);
  return (
    <Container>
      <Header as="h1">Gutarrak</Header>
      <Card.Group itemsPerRow={6} doubling>
        {users.sort(dynamicSort('display_name')).map((user) => {
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
    </Container>
  );
};

export default Gutarrak;
