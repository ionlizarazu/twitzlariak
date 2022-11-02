import './twitzlariakCard.css';

import { Card, Icon, Image } from 'semantic-ui-react';
import React from 'react';

// import api from '../api.js';

const TwitzlariaCard = ({
  title,
  meta,
  description,
  image_url,
  zuzenean = false,
}) => {
  return (
    <>
      <Card.Content>
        <Image
          floated="left"
          size="tiny"
          src={
            image_url ||
            'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'
          }
        />
        <Card.Header>
          {zuzenean && (
            <Icon circular inverted size="tiny" color="red" name="record" />
          )}
          {title || 'Twitzlaria'}
        </Card.Header>
        <Card.Meta>{meta ? meta + ' ikustaldi' : '0 ikustaldi'}</Card.Meta>
        <Card.Description className="ellipsis">
          {description ||
            'twitzlariaren deskribapena hemen idatzita agertuko da'}
        </Card.Description>
      </Card.Content>
    </>
  );
};

export default TwitzlariaCard;
