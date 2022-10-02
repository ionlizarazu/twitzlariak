import './portada.css';

import {
  Card,
  Container,
  Dropdown,
  Header,
  Icon,
  List,
  Pagination,
  Segment,
  Select,
} from 'semantic-ui-react';
import {
  GetErabiltzaileak,
  GetErabiltzailearenKlipak,
  GetZuzenekoak,
} from '../api.js';
import { KLIP_ORDENAZIOA, TWITZLARI_AUKERAK } from '../const';
import React, { useEffect, useState } from 'react';

import ClipCard from '../cards/ClipCard';
import ZuzenekoaCard from '../cards/ZuzenekoaCard';
import { dynamicSort } from '../utils';
import twitzlariak from '../twitzlariak.json';

const Portada = (props) => {
  const [klipakOriginala, setKlipakOriginala] = useState([]);
  const [klipak, setKlipak] = useState([]);
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);
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
  atzeraData.setDate(gaur.getDate() - 30);
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
      klipak.slice((paginationOrria - 1) * 12, (paginationOrria - 1) * 12 + 12),
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

            setKlipak((prevState) =>
              [...prevState, klipa].sort(dynamicSort('-created_at')),
            );
            setKlipakOriginala((prevState) =>
              [...prevState, klipa].sort(dynamicSort('-created_at')),
            );
          });
          setKlipEgileak(klipEgileakBerria);
        });
      });
    }
  }, [users]);

  const handlePaginationChange = (e, { activePage }) =>
    setPaginationOrria(activePage);

  const ordenatu = (irizpidea) => {
    setKlipak([...klipak.sort(dynamicSort(irizpidea))]);
    setKlipakOriginala([...klipak.sort(dynamicSort(irizpidea))]);
  };

  const handleChange = (e, { value }) => {
    if (value.length > 0) {
      const filter_klipak = [
        ...klipakOriginala.filter((klipa) =>
          value.includes(klipa.broadcaster_name.toLowerCase()),
        ),
      ];
      setKlipak(filter_klipak);
    } else if (value.length === 0) {
      setKlipak(klipakOriginala);
    }
  };

  return (
    <Container>
      <h1>Hasierako orria</h1>
      <div className="pulsating-circle"></div>
      <h2 className="pulsating-circle">Orain zuzenean</h2>
      {zuzenekoak.length > 0 ? (
        <Card.Group itemsPerRow={3} doubling>
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
      <Segment>
        <strong>Ordenatu: </strong>
        <Select
          placeholder="Ordenatu klipak"
          options={KLIP_ORDENAZIOA}
          onChange={(e, { value }) => ordenatu(value)}
          defaultValue={'-created_at'}
        />
        <br />
        <br />
        <strong>Iragazi: </strong>

        <Dropdown
          placeholder="Erabiltzaileak"
          multiple
          selection
          search
          onAddItem={(event, data) =>
            setOptions([
              ...options,
              { key: data.value, text: data.value, value: data.value },
            ])
          }
          options={TWITZLARI_AUKERAK}
          onChange={handleChange}
        />
      </Segment>
      <Segment>
        {paginationKlipak.length > 0 ? (
          <>
            <Card.Group itemsPerRow={4} doubling>
              {paginationKlipak.map((clip) => (
                <ClipCard clip={clip} />
              ))}
            </Card.Group>
            {Math.round(klipak.length / 12) > 1 && (
              <Pagination
                boundaryRange={1}
                defaultActivePage={1}
                showEllipsis={true}
                activePage={paginationOrria}
                onPageChange={handlePaginationChange}
                totalPages={Math.round(klipak.length / 12)}
              />
            )}
          </>
        ) : (
          <Segment placeholder>
            <Header icon>
              <Icon name="video" />
              Ez dago bilaketa horrekin ezer.
            </Header>
          </Segment>
        )}
      </Segment>
    </Container>
  );
};

export default Portada;
