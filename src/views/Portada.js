import './portada.css';

import {
  Card,
  Dropdown,
  Grid,
  Header,
  Icon,
  Button,
  Pagination,
  Segment,
  Select,
  Statistic,
  Sidebar,
  // List,
  // Item,
} from 'semantic-ui-react';
// import { GetErabiltzailearenKlipak } from '../api.js';
import { KLIP_ORDENAZIOA } from '../config/const';
import React, { useEffect, useState } from 'react';

import ClipCard from '../cards/ClipCard';
import ZuzenekoaCard from '../cards/ZuzenekoaCard';
import { dynamicSort } from '../utils';
import twitzlariak from '../config/twitzlariak.json';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getZuzenekoak } from '../store/actions';
import { getErabiltzailearenKlipak } from '../store/actions';
import { getStatSize } from './utils';

const Portada = (props) => {
  const users = useSelector((state) => state.erabiltzaileak);
  const lives = useSelector((state) => state.zuzenekoak);
  const clips_state = useSelector((state) => state.klipak);
  const dispatch = useDispatch();
  const [clipsOriginal, setclipsOriginal] = useState([]);
  const [clipOwners, setclipOwners] = useState([]);
  const [clipCreators, setclipCreators] = useState([]);
  const [klipak, setClips] = useState([]);
  const [filteredClipper, setFilteredClipper] = useState([]);
  const [options, setOptions] = useState([]);
  const [paginationClips, setPaginationClips] = useState([]);
  const [filteredBroadcaster, setfilteredBroadcaster] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  useEffect(() => {
    if (
      clips_state.loaded &&
      Object.keys(clips_state.broadcasters).length > 0
    ) {
      let klipak = [];
      Object.keys(clips_state.broadcasters).forEach((broadcaster) => {
        if (clips_state.broadcasters[broadcaster].length > 0) {
          clips_state.broadcasters[broadcaster].forEach((klip) =>
            klipak.push(klip),
          );
        }
      });
      setClips(klipak.sort(dynamicSort('-created_at')));
      setclipsOriginal([...klipak.sort(dynamicSort('-created_at'))]);
      setclipOwners(
        [...new Set(klipak.map((k) => k.broadcaster_name).sort())].map(
          (b_name) => {
            return {
              key: b_name,
              value: b_name,
              text: b_name,
            };
          },
        ),
      );
      setclipCreators(
        [...new Set(klipak.map((k) => k.creator_name).sort())].map((c_name) => {
          var clip_count = klipak.filter((k) => k.creator_name === c_name);
          return {
            key: c_name,
            value: c_name,
            text: c_name,
            count: clip_count.length,
          };
        }),
      );
    }
  }, [clips_state]);
  const [paginationOrria, setPaginationOrria] = useState(1);
  const paginationSize = 10;
  const twitzlariList = twitzlariak.twitzlariak;
  useEffect(() => {
    dispatch(getZuzenekoak(twitzlariList));
  }, [dispatch, twitzlariList]);

  useEffect(() => {
    setPaginationClips(
      klipak.slice(
        (paginationOrria - 1) * paginationSize,
        (paginationOrria - 1) * paginationSize + paginationSize,
      ),
    );
  }, [klipak, paginationOrria]);

  useEffect(() => {
    if (users.loaded && users.items.length > 0) {
      users.items.forEach((user) => {
        dispatch(getErabiltzailearenKlipak(user));
      });
    }
  }, [dispatch, users]);

  const handlePaginationChange = (e, { activePage }) =>
    setPaginationOrria(activePage);

  const ordenatu = (irizpidea) => {
    setClips([...klipak.sort(dynamicSort(irizpidea))]);
    setclipsOriginal([...klipak.sort(dynamicSort(irizpidea))]);
  };

  const filterClips = (e, { value }, field, setter) => {
    clearClipFilters();
    if (value.length > 0) {
      const values_to_filter = value.map((v) => v.toLowerCase());
      const filter_clips = [
        ...clipsOriginal.filter((klipa) =>
          values_to_filter.includes(klipa[field].toLowerCase()),
        ),
      ];
      setter(value);
      setClips(filter_clips);
    } else if (value.length === 0) {
      setClips(clipsOriginal);
    }
  };

  const clearClipFilters = () => {
    setFilteredClipper([]);
    setfilteredBroadcaster([]);
    setClips(clipsOriginal);
  };

  return (
    <div>
      {/* <h1>Twitch euskaraz</h1> */}
      <div className="live-container">
        <h2>Orain zuzenean</h2>
        {lives.loaded && lives.items.length > 0 ? (
          <Segment basic className="lives-container">
            <Card.Group itemsPerRow={3} stackable>
              {lives.items.map((erabiltzailea, index) => (
                <ZuzenekoaCard erabiltzailea={erabiltzailea} isLive={true} />
              ))}
            </Card.Group>
          </Segment>
        ) : (
          <Segment basic className="live">
            <Header icon>
              <Icon name="history" />
              Orain momentuan ez dago inor zuzenean.
            </Header>
          </Segment>
        )}
      </div>

      <div className="clips-container">
        <h2>Klipak</h2>

        <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
          <Sidebar
            as={Segment}
            animation="overlay"
            visible={sidebarVisible}
            className="clip-filter-container"
          >
            <Icon
              className="close-filter"
              name="close"
              onClick={() => setSidebarVisible(false)}
            />
            <h3>Iragazkiak:</h3>
            <Grid columns={1} stackable>
              <Grid.Row>
                <Grid.Column>
                  <strong className="filter-heading">Ordenatu:</strong>
                  <Select
                    placeholder="Ordenatu klipak"
                    options={KLIP_ORDENAZIOA}
                    onChange={(e, { value }) => ordenatu(value)}
                    defaultValue={'-created_at'}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <strong className="filter-heading">Klip egilea:</strong>
                  <Dropdown
                    id="filter-clip-creator"
                    placeholder="Klip egilea"
                    multiple
                    selection
                    search
                    value={filteredClipper}
                    onAddItem={(event, data) =>
                      setOptions([
                        ...options,
                        {
                          key: data.value,
                          text: data.value,
                          value: data.value,
                        },
                      ])
                    }
                    options={clipCreators}
                    onChange={(e, props) =>
                      filterClips(e, props, 'creator_name', setFilteredClipper)
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <strong className="filter-heading">Streamerra:</strong>
                  <Dropdown
                    id="filter-streamer"
                    placeholder="Steamerra"
                    multiple
                    selection
                    search
                    value={filteredBroadcaster}
                    onAddItem={(event, data) =>
                      setOptions([
                        ...options,
                        {
                          key: data.value,
                          text: data.value,
                          value: data.value,
                        },
                      ])
                    }
                    options={clipOwners}
                    onChange={(e, props) =>
                      filterClips(
                        e,
                        props,
                        'broadcaster_name',
                        setfilteredBroadcaster,
                      )
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Button className="secondary" onClick={clearClipFilters}>
                    Garbitu iragazkiak
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Sidebar>

          <Sidebar.Pusher /*dimmed={dimmed && visible}*/>
            <Segment basic className="clips-container">
              <Button
                onClick={() => setSidebarVisible(!sidebarVisible)}
                icon
                labelPosition="left"
                className={sidebarVisible ? 'hidden-button primary' : 'primary'}
              >
                <Icon name="filter" />
                Iragazkiak
              </Button>
              {paginationClips.length > 0 ? (
                <>
                  <Card.Group itemsPerRow={5} stackable>
                    {paginationClips.map((clip, key) => (
                      <ClipCard key={key} clip={clip} />
                    ))}
                  </Card.Group>
                  {Math.round(klipak.length / paginationSize) > 1 && (
                    <Segment basic textAlign="center">
                      <Pagination
                        boundaryRange={1}
                        defaultActivePage={1}
                        firstItem={null}
                        lastItem={null}
                        size="mini"
                        activePage={paginationOrria}
                        onPageChange={handlePaginationChange}
                        totalPages={Math.round(klipak.length / paginationSize)}
                      />
                    </Segment>
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Segment className="clipers-container">
          <h3>Klipen egileak:</h3>
          <Grid columns={5} stackable className="ranking-grid">
            {clipCreators &&
              clipCreators
                .sort(dynamicSort('-count'))
                .slice(0, 25)
                .map((egilea, key) => (
                  <Grid.Column key={key}>
                    <Statistic size={getStatSize(egilea.count)} color="violet">
                      <Statistic.Value>{egilea.count}</Statistic.Value>
                      <Statistic.Label>{egilea.value}</Statistic.Label>
                    </Statistic>
                  </Grid.Column>
                ))}
          </Grid>
        </Segment>
      </div>
    </div>
  );
};

export default Portada;
