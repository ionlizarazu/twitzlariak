import { Card, Image, Label, Icon } from 'semantic-ui-react';

import React from 'react';

// import './twitzlariakCard.css'

const ZuzenekoaCard = ({ erabiltzailea }) => {
  return (
    <Card>
      <a
        href={'https://www.twitch.tv/' + erabiltzailea?.user_login}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={
            erabiltzailea?.thumbnail_url
              .replace('{width}', 440)
              .replace('{height}', 228) ||
            'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'
          }
          className="live-img"
        />
      </a>
      <Card.Content>
        <Label color="red" ribbon="right">
          Zuzenean
        </Label>
        <Card.Header>
          <a
            href={'https://www.twitch.tv/' + erabiltzailea?.user_login}
            target="_blank"
            rel="noreferrer"
          >
            {erabiltzailea?.user_name || 'Twitzlaria'}
          </a>
        </Card.Header>
        {erabiltzailea?.game_name && (
          <Card.Meta>{erabiltzailea?.game_name}</Card.Meta>
        )}
        <Card.Description>
          {erabiltzailea?.title ||
            'twitzlariaren deskribapena hemen idatzita agertuko da'}
          <div>
            <Icon name="eye" />
            {erabiltzailea.viewer_count} ikusle
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ZuzenekoaCard;
