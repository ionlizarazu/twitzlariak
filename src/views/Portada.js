import './portada.css';

import {
  Card,
  Container,
  Header,
  Icon,
  List,
  Pagination,
  Segment,
} from 'semantic-ui-react';
import {
  GetErabiltzaileak,
  GetErabiltzailearenKlipak,
  GetZuzenekoak,
} from '../api.js';
import React, { useEffect, useState } from 'react';

import ClipCard from '../cards/ClipCard';
import ZuzenekoaCard from '../cards/ZuzenekoaCard';
import { dynamicSort } from '../utils';
import twitzlariak from '../twitzlariak.json';

const Portada = (props) => {
  const [klipak, setKlipak] = useState([]);
  const [users, setUsers] = useState([]);
  const [paginationKlipak, setPaginationKlipak] = useState(klipak.slice(0, 12));
  const [paginationOrria, setPaginationOrria] = useState(1);
  const [zuzenekoak, setZuzenekoak] = useState([]);
  const [klipEgileak, setKlipEgileak] = useState([]);
  const getZuzenekoak = async () =>
    setZuzenekoak(await GetZuzenekoak(twitzlariList));
  useEffect(() => {
    getZuzenekoak();
  }, []);
  const twitzlariList = twitzlariak.twitzlariak;
  let gaur = new Date();
  let atzeraData = new Date();
  atzeraData.setDate(gaur.getDate() - 20);
  const getErabiltzailearenKlipak = async (user_id) => {
    return await GetErabiltzailearenKlipak(user_id);
  };
  const getErabiltzaileak = async (users) => {
    return await GetErabiltzaileak(users);
  };

  useEffect(() => {
    getErabiltzaileak(twitzlariList).then((response) => {
      setUsers(response);
    });
  }, []);

  useEffect(() => {
    setPaginationKlipak(
      klipak
        .sort(dynamicSort('-created_at'))
        .slice((paginationOrria - 1) * 12, (paginationOrria - 1) * 12 + 12),
    );
  }, [klipak, paginationOrria]);

  useEffect(() => {
    if (users.length > 0) {
      const klipEgileakBerria = [...klipEgileak];
      users.forEach((user) => {
        getErabiltzailearenKlipak(user.id).then((response) => {
          response.forEach((klipa) => {
            if (
              klipEgileakBerria.filter(
                (creator) => creator.egilea === klipa.creator_name,
              ).length === 0
            ) {
              klipEgileakBerria.push({
                egilea: klipa.creator_name,
                klipak: 1,
              });
            } else {
              klipEgileakBerria.forEach((creator) => {
                if (creator.egilea === klipa.creator_name) {
                  creator.klipak++;
                }
              });
            }

            setKlipak((prevState) => [...prevState, klipa]);
          });
          setKlipEgileak(klipEgileakBerria);
        });
      });
    }
  }, [users]);

  const handlePaginationChange = (e, { activePage }) =>
    setPaginationOrria(activePage);

  return (
    <Container>
      <h1>Hasierako orria</h1>
      <div className="pulsating-circle"></div>
      <h2 className="pulsating-circle">Orain zuzenean</h2>
      {zuzenekoak.length > 0 ? (
        <Card.Group itemsPerRow={3} stackable>
          {zuzenekoak.map((erabiltzailea, index) => (
            <ZuzenekoaCard erabiltzailea={erabiltzailea} />
          ))}
        </Card.Group>
      ) : (
        <Segment placeholder>
          <Header icon>
            <Icon name="history" />
            Orain momentuan ez dago inor zuzenean.
          </Header>
        </Segment>
      )}
      <hr />
      <h2>Azken 30 egunetako klipak</h2>
      <Segment>
        <h3>Klipari ekinenak:</h3>
        <List divided horizontal>
          {klipEgileak &&
            klipEgileak.sort(dynamicSort('-klipak')).map(
              (egilea) =>
                egilea.klipak > 2 && (
                  <List.Item>
                    <List.Content>
                      <List.Header>{egilea.egilea}</List.Header>
                      <List.Description>{egilea.klipak} klip</List.Description>
                    </List.Content>
                  </List.Item>
                ),
            )}
        </List>
      </Segment>
      <Card.Group itemsPerRow={4} stackable>
        {paginationKlipak.map((clip) => (
          <ClipCard clip={clip} />
        ))}
      </Card.Group>
      <Segment>
        <Pagination
          boundaryRange={1}
          defaultActivePage={1}
          showEllipsis={true}
          activePage={paginationOrria}
          onPageChange={handlePaginationChange}
          totalPages={Math.round(klipak.length / 12)}
        />
      </Segment>
    </Container>
  );
};

export default Portada;
