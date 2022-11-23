import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import ClipCard from '../../components/cards/ClipCard';
import ZuzenekoaCard from '../../components/cards/ZuzenekoaCard';
import { KLIP_ORDENAZIOA } from '../../config/const';
import twitzlariak from '../../config/twitzlariak.json';
import { useFilteredPagination } from '../../helpers/useFilteredPagination';
import { getZuzenekoak, getErabiltzaileenKlipak } from '../../store/actions';
import { dynamicSort, getStatSize } from '../../utils';
import './portada.css';

const Portada = (props) => {
  const users = useSelector((state) => state.erabiltzaileak);
  const users_ref = useRef(users);
  const clipsRef = useRef(null);
  const lives = useSelector((state) => state.zuzenekoak);
  const clips_state = useSelector((state) => state.klipak);
  const dispatch = useDispatch();
  const [clipOwners, setclipOwners] = useState([]);
  const [clipCreators, setclipCreators] = useState([]);
  const [options, setOptions] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const { functions, data } = useFilteredPagination([]);
  const { pagination, currentPage, paginationSize, dataList, filters } = data;
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
      functions.setDataList(klipak.sort(dynamicSort('-created_at')));
      functions.setOriginalDataList([
        ...klipak.sort(dynamicSort('-created_at')),
      ]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clips_state.loaded, clips_state.broadcasters]);
  const twitzlariList = twitzlariak.twitzlariak;
  useEffect(() => {
    dispatch(getZuzenekoak(twitzlariList));
  }, [dispatch, twitzlariList]);

  useEffect(() => {
    if (users_ref.current.loading && users.loaded && users.items.length > 0) {
      dispatch(getErabiltzaileenKlipak(users.items));
    }
    users_ref.current = users;
  }, [dispatch, users]);

  const handlePaginationChange = (e, { activePage }) => {
    clipsRef.current?.scrollIntoView({ behavior: 'smooth' });
    functions.setCurrentPage(activePage);
  };

  return (
    <div>
      <div className="live-container">
        <h2>Orain zuzenean</h2>
        {lives.loaded && lives.items.length > 0 ? (
          <Segment basic className="lives-container">
            <Card.Group itemsPerRow={3} stackable>
              {lives.items.map((erabiltzailea, index) => (
                <ZuzenekoaCard
                  key={index}
                  erabiltzailea={erabiltzailea}
                  isLive={true}
                />
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

        <div ref={clipsRef}>
          <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
            <Sidebar
              as={Segment}
              animation="push"
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
                {/* <Grid.Row>
                <Grid.Column>
                  <strong className="filter-heading">Ordenatu:</strong>
                  <Select
                    placeholder="Ordenatu klipak"
                    options={KLIP_ORDENAZIOA}
                    onChange={(e, { value }) => functions.applyOrder(value)}
                    defaultValue={'-created_at'}
                  />
                </Grid.Column>
              </Grid.Row> */}
                <Grid.Row>
                  <Grid.Column>
                    <strong className="filter-heading">Klip egilea:</strong>
                    <Dropdown
                      id="filter-clip-creator"
                      placeholder="Klip egilea"
                      multiple
                      selection
                      search
                      value={filters['creator_name'] ?? []}
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
                      onChange={(e, value) =>
                        functions.applyFilter(e, value, 'creator_name')
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
                      value={filters['broadcaster_name'] ?? []}
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
                      onChange={(e, value) =>
                        functions.applyFilter(e, value, 'broadcaster_name')
                      }
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      className="secondary"
                      onClick={functions.clearFilters}
                    >
                      Garbitu iragazkiak
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Sidebar>

            <Sidebar.Pusher /*dimmed={dimmed && visible}*/>
              <Segment
                basic
                className="clips-container"
                loading={clips_state.loading}
              >
                <Button
                  onClick={() => setSidebarVisible(!sidebarVisible)}
                  icon
                  labelPosition="left"
                  className={
                    sidebarVisible ? 'hidden-button primary' : 'primary'
                  }
                >
                  <Icon name="filter" />
                  Iragazkiak
                </Button>
                <Grid stackable className="order-container">
                  <Grid.Row columns={4}>
                    <Grid.Column>
                      <strong className="filter-heading">Ordenatu:</strong>
                      <Select
                        placeholder="Ordenatu klipak"
                        className="order-select"
                        options={KLIP_ORDENAZIOA}
                        onChange={(e, { value }) => functions.applyOrder(value)}
                        defaultValue={'-created_at'}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <strong className="filter-heading">Multzokatu:</strong>
                      <Select
                        className="pagination-size"
                        options={[
                          { value: 10, text: '10 klip orriko' },
                          { value: 20, text: '20 klip orriko' },
                          { value: 50, text: '50 klip orriko' },
                          { value: 100, text: '100 klip orriko' },
                        ]}
                        onChange={(e, { value }) =>
                          functions.setPaginationSize(value)
                        }
                        defaultValue={paginationSize}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                {pagination.length > 0 ? (
                  <>
                    <Card.Group itemsPerRow={5} stackable doubling>
                      {pagination.map((clip, key) => (
                        <ClipCard key={key} clip={clip} />
                      ))}
                    </Card.Group>
                    {Math.round(dataList.length / paginationSize) > 1 && (
                      <Segment basic textAlign="center">
                        <Pagination
                          boundaryRange={1}
                          firstItem={null}
                          lastItem={null}
                          size="mini"
                          activePage={currentPage}
                          onPageChange={handlePaginationChange}
                          totalPages={Math.round(
                            dataList.length / paginationSize,
                          )}
                        />
                      </Segment>
                    )}
                  </>
                ) : (
                  <Segment placeholder className="no-clips">
                    <Header></Header>
                  </Segment>
                )}
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>

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
