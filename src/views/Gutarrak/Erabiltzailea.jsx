import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Label,
  Image,
  Segment,
  Grid,
  Card,
  Header,
  Icon,
} from 'semantic-ui-react';

import VideoCard from '../../components/cards/VideoCard';
import { getErabiltzailearenBideoak } from '../../store/actions';

// import moment from 'moment';

const Erabiltzailea = (props) => {
  let { user } = useParams();
  const dispatch = useDispatch();
  const erabiltzaileak = useSelector((state) => state.erabiltzaileak);
  const videos = useSelector((state) => state.bideoak);
  const userList =
    erabiltzaileak.loaded && erabiltzaileak.items.length > 0
      ? erabiltzaileak.items.filter(
          (item) => item.login.toUpperCase() === user.toUpperCase(),
        )
      : {};
  const user_obj = userList.length > 0 ? userList[0] : {};
  useEffect(() => {
    if (user_obj.login) {
      if (!videos.loaded || !videos?.[user_obj.login]) {
        dispatch(getErabiltzailearenBideoak(user_obj));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user_obj]);
  const user_archive = videos?.broadcasters?.[user_obj.display_name]
    ? videos?.broadcasters?.[user_obj.display_name].filter(
        (video) => video.type === 'archive',
      )
    : [];
  const user_u_h = videos?.broadcasters?.[user_obj.display_name]
    ? videos?.broadcasters?.[user_obj.display_name].filter(
        (video) => video.type !== 'archive',
      )
    : [];
  return (
    <div>
      <h1>{user}</h1>
      <Segment basic>
        <Grid stackable doubling>
          <Grid.Row columns={2}>
            <Grid.Column width={3} centered>
              <Segment basic>
                <Image
                  fluid
                  src={user_obj?.profile_image_url
                    ?.replace('%{width}', 440)
                    .replace('%{height}', 228)}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={13}>
              <Segment basic>
                {user_obj.broadcaster_type && (
                  <Label color="violet">
                    {user_obj.broadcaster_type === 'affiliate'
                      ? 'Afiliatua'
                      : user_obj.broadcaster_type}
                  </Label>
                )}
                <p className="description">{user_obj.description}</p>
              </Segment>
              {/* <Card.Content>
                <Card.Header>{user?.display_name}</Card.Header>
                <Card.Meta>
                  <span className="date">
                    {moment(user?.created_at).format('YYYY/MM/DD')}
                  </span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name="eye" />
                {user?.view_count} ikustaldi
              </Card.Content> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <h2>Azken bideoak</h2>
      <Segment
        basic
        loading={videos.loading}
        placeholder={user_archive.length === 0}
      >
        <Card.Group centered itemsPerRow={5} doubling>
          {user_archive &&
            user_archive.map((video) => <VideoCard video={video} />)}
        </Card.Group>
        {user_archive.length === 0 && !videos.loading && (
          <Header icon>
            <Icon name="history" />
            Orain ez dauka gordetako bideorik.
          </Header>
        )}
      </Segment>
      {user_u_h.length > 0 && (
        <>
          <h2>Igotakoak eta destakatuak</h2>
          <Segment basic loading={videos.loading}>
            <Card.Group centered itemsPerRow={5} doubling>
              {user_u_h && user_u_h.map((video) => <VideoCard video={video} />)}
            </Card.Group>
          </Segment>
        </>
      )}
    </div>
  );
};

export default Erabiltzailea;
