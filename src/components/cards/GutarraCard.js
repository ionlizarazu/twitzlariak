import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import moment from 'moment';

const GutarraCard = ({ user }) => {
  return (
    <Card>
      <Link to={`/gutarrak/${user?.display_name}`}>
        {user.broadcaster_type ? (
          <Image
            label={{
              color: 'violet',
              content:
                user.broadcaster_type === 'affiliate'
                  ? 'Afiliatua'
                  : user.broadcaster_type,
              ribbon: 'right',
            }}
            src={user?.profile_image_url
              ?.replace('%{width}', 440)
              .replace('%{height}', 228)}
          />
        ) : (
          <Image
            src={user?.profile_image_url
              ?.replace('%{width}', 440)
              .replace('%{height}', 228)}
          />
        )}
      </Link>
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
            {user?.description.length > 60
              ? `${user?.description.substring(0, 60)}...`
              : user?.description}
          </Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        <Icon name="eye" />
        {user?.view_count} ikustaldi
      </Card.Content>
    </Card>
  );
};

export default GutarraCard;
