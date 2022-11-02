import {
  Card,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import TwitchAPI, {
  GetErabiltzailearenBideoak,
  GetErabiltzailearenKlipak,
} from '../api.js';

import { Link } from 'react-router-dom';
import TwitzlariaCard from '../cards/TwitzlariaCard';
import moment from 'moment';
import twitzlariak from '../config/twitzlariak.json';

const Bilatzailea = (props) => {
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);
  const [userList, setUserList] = useState([]);
  const [bideoak, setBideoak] = useState([]);
  const [klipak, setKlipak] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  // const [atzeraData, setAtzeraData] = useState(new Date())
  const twitzlariList = twitzlariak.twitzlariak.map((twitzlaria) => {
    return { key: twitzlaria, text: twitzlaria, value: twitzlaria };
  });

  const getErabiltzailearenBideoak = async (user_id) => {
    return await GetErabiltzailearenBideoak(user_id);
  };
  const getErabiltzailearenKlipak = async (user_id) => {
    return await GetErabiltzailearenKlipak(user_id);
  };

  useEffect(() => {
    const fetchData = async () => {
      userList.length > 0 &&
        TwitchAPI.get(
          'users?login=' + userList.join('&login='),
        ).then((response) => setUsers(response.data.data));
    };
    fetchData();
  }, [userList]);

  useEffect(() => {
    setOptions(twitzlariList);
    setSelectedUser('');
  }, [twitzlariList]);

  function handleChange(e, { value }) {
    setUserList(value);
    setBideoak([]);
    setKlipak([]);
  }

  async function handleClick(user) {
    if (user) {
      setSelectedUser(user.display_name);
      setBideoak([]);
      setKlipak([]);
      let azkenBideoak = [];
      let azkenKlipak = [];
      await (await getErabiltzailearenBideoak(user.id)).forEach((bideoa) => {
        azkenBideoak = [...azkenBideoak, bideoa];
      });
      setBideoak(azkenBideoak);

      await (await getErabiltzailearenKlipak(user.id)).forEach((klipa) => {
        azkenKlipak = [...azkenKlipak, klipa];
      });
      setKlipak(azkenKlipak);
    }
  }

  let gaur = new Date();
  let atzeraData = new Date();
  atzeraData.setDate(gaur.getDate() - 7);

  return (
    <Container>
      <Dropdown
        placeholder="Erabiltzaileak"
        fluid
        multiple
        selection
        search
        allowAdditions
        onAddItem={(event, data) =>
          setOptions([
            ...options,
            { key: data.value, text: data.value, value: data.value },
          ])
        }
        options={options}
        onChange={handleChange}
      />
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={5}>
            {users.length > 0 ? (
              users.map((user, index) => (
                <Card
                  className={selectedUser === user.display_name ? 'active' : ''}
                  onClick={() => handleClick(user)}
                >
                  <TwitzlariaCard
                    title={user.display_name}
                    meta={user.view_count}
                    description={user.description}
                    image_url={user.profile_image_url}
                    key={index}
                  />
                </Card>
              ))
            ) : (
              <Card>
                <TwitzlariaCard />
              </Card>
            )}
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">
                <Icon size="tiny" name="video camera" />
                <Header.Content>Bideoak</Header.Content>
              </Header>
            </Segment>
            <Card.Group>
              {bideoak.length > 0 ? (
                bideoak.map((bideoa, index) => (
                  <Card>
                    <Image
                      src={bideoa.thumbnail_url
                        .replace('%{width}', 440)
                        .replace('%{height}', 228)}
                    />
                    <Card.Content>
                      <Card.Header
                        as={Link}
                        to={{ pathname: bideoa.url }}
                        target="_blank"
                      >
                        {bideoa.title}
                      </Card.Header>
                      <Card.Description as="a">
                        {moment(bideoa.created_at).format('YYYY/MM/DD HH:MM')}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                ))
              ) : (
                <>Ez dago bideorik...</>
              )}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">
                <Icon size="tiny" name="paperclip" />
                <Header.Content>klipak</Header.Content>
              </Header>
            </Segment>
            <Card.Group>
              {klipak.length > 0 ? (
                klipak.map((clip, index) => (
                  <Card>
                    <Image
                      src={clip.thumbnail_url
                        .replace('%{width}', 440)
                        .replace('%{height}', 228)}
                    />
                    <Card.Content>
                      <Card.Header as={Link} to={{ pathname: clip.url }}>
                        {clip.title}
                      </Card.Header>
                      <Card.Description as="a">
                        {moment(clip.created_at).format('YYYY/MM/DD HH:MM')}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                ))
              ) : (
                <>Ez dago klipik...</>
              )}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Bilatzailea;
