import { Card, Grid, Icon, Image, Label, Popup } from 'semantic-ui-react';

import React from 'react';
import moment from 'moment';

const ClipCard = ({ clip }) => {
  return (
    <Card>
      <Card.Content>
        <Label attached="top left" color="violet">
          {clip.broadcaster_name}
        </Label>
        <Card.Header>{clip.title}</Card.Header>
      </Card.Content>
      <a href={clip.url} target="_blank" rel="noreferrer">
        <Image
          src={clip.thumbnail_url
            .replace('%{width}', 440)
            .replace('%{height}', 228)}
        />
      </a>
      <Card.Content extra>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <div>
                <Icon name="eye" />
                {clip.view_count} ikustaldi
              </div>
              <div>
                <Icon name="clock" />
                {moment(clip.created_at).format('YYYY/MM/DD')}
              </div>
              <div>
                <Icon name="paperclip" />
                {clip.creator_name}
              </div>
            </Grid.Column>
            <Grid.Column>
              <a
                type="button"
                role="button"
                title="Share on twitter"
                target={'_blank'}
                rel="noreferrer"
                href={
                  'https://twitter.com/intent/tweet?url=' +
                  '[' +
                  clip.broadcaster_name +
                  ']' +
                  '%0A' +
                  clip.title +
                  '%0A%0A' +
                  clip.url
                }
              >
                <Icon name="twitter" color="blue" size="big" />
              </a>
              <Popup
                content="Arbelean kopiatu da zure sareetan partekatzeko!"
                hideOnScroll
                basic
                inverted
                position="top center"
                on="click"
                trigger={
                  <Icon
                    name="copy"
                    size="big"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        '[' +
                          clip.broadcaster_name +
                          ']' +
                          '\n' +
                          clip.title +
                          '\n\n' +
                          clip.url,
                      );
                    }}
                  />
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default ClipCard;
