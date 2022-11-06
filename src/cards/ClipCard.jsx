import {
  Card,
  Grid,
  Icon,
  Image,
  Label,
  Popup,
  Segment,
} from 'semantic-ui-react';
import './cards.css';
import React from 'react';
import moment from 'moment';

const ClipCard = ({ clip }) => {
  return (
    <Card className="clip-card">
      <a href={clip.url} target="_blank" rel="noreferrer">
        <Image
          src={clip.thumbnail_url
            .replace('%{width}', 440)
            .replace('%{height}', 228)}
        />
      </a>
      <Label attached="top left" className="card-ribbon">
        {clip.broadcaster_name}
      </Label>
      <Card.Content className="card-content">
        <Card.Header>
          <a href={clip.url} target="_blank" rel="noreferrer">
            {clip.title}
          </a>
        </Card.Header>
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column width={11} className="no-l-padded">
                <Grid>
                  <Grid.Row className="no-padded">
                    <Grid.Column>
                      <Icon name="paperclip" />
                      {clip.creator_name.length > 15
                        ? `${clip.creator_name.substring(0, 15)}...`
                        : clip.creator_name}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className="no-padded">
                    <Grid.Column>
                      <Icon name="clock" />
                      {moment(clip.created_at).format('YYYY/MM/DD')}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className="no-padded">
                    <Grid.Column>
                      <Icon name="eye" />
                      {clip.view_count} ikustaldi
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column width={5} className="share-clip">
                <a
                  type="button"
                  role="button"
                  title="Share on twitter"
                  target={'_blank'}
                  rel="noreferrer"
                  href={`https://twitter.com/intent/tweet?url=[${clip.broadcaster_name}]%0A${clip.title}%0A%0A${clip.url}`}
                >
                  <Icon name="twitter" color="blue" size="large" />
                </a>
                <Popup
                  content="Arbelean kopiatu da zure sareetan partekatzeko!"
                  basic
                  inverted
                  position="top center"
                  on="click"
                  trigger={
                    <Icon
                      name="copy"
                      size="large"
                      className="copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `[${clip.broadcaster_name}]\n${clip.title}\n\n${clip.url}`,
                        );
                      }}
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Card.Content>
    </Card>
  );
};

export default ClipCard;
