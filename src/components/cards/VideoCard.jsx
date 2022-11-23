import { Card, Image, Icon } from 'semantic-ui-react';

import React from 'react';

// import './twitzlariakCard.css'
import moment from 'moment';

const VideoCard = ({ video }) => {
  return (
    <Card>
      <a href={video?.url} target="_blank" rel="noreferrer">
        <Image
          src={
            video?.thumbnail_url
              .replace('%{width}', 440)
              .replace('%{height}', 228) ||
            'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'
          }
          className="live-img"
        />
      </a>
      <Card.Content>
        <Card.Header>
          <a href={video?.url} target="_blank" rel="noreferrer">
            {video?.title}
          </a>
        </Card.Header>
        <Card.Description>
          <div>
            <Icon name="calendar" />
            {moment(video?.created_at).format('YYYY/MM/DD')}
          </div>
          <div>
            <Icon name="eye" />
            {video.view_count} ikustaldi
          </div>
          <div>
            <Icon name="stopwatch" />
            {video.duration}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default VideoCard;
