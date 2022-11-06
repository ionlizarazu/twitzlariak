import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

import moment from 'moment';

const Erabiltzailea = (props) => {
  let { user } = useParams();
  const erabiltzaileak = useSelector((state) => state.erabiltzaileak);
  const userList =
    erabiltzaileak.loaded && erabiltzaileak.items.length > 0
      ? erabiltzaileak.items.filter(
          (item) => item.login.toUpperCase() === user.toUpperCase(),
        )
      : {};
  const userObj = userList.length > 0 ? userList[0] : {};
  return (
    <div>
      <h1>{user}</h1>
      <Card>
        <Image
          src={userObj?.profile_image_url
            ?.replace('%{width}', 440)
            .replace('%{height}', 228)}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{userObj?.display_name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {moment(userObj?.created_at).format('YYYY/MM/DD')}
            </span>
          </Card.Meta>
          <Card.Description>{userObj?.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="eye" />
          {userObj?.view_count} ikustaldi
        </Card.Content>
      </Card>
    </div>
  );
};

export default Erabiltzailea;
