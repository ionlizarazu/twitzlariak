import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Segment, List, Grid, Input } from 'semantic-ui-react';

import twitzlariak from '../../config/twitzlariak.json';
import { getZuzenekoak } from '../../store/actions';
import { ParamManager } from '../../helpers/ParamManager';
import { hexToRgb, rgbToHex } from '../../utils';
import './zuzenean.css';

// const getLives = (twitzlariList, dispatch) => {
//   dispatch(getZuzenekoak(twitzlariList));
// };

const Zuzenean = (props) => {
  const twitzlariList = twitzlariak.twitzlariak;
  const dispatch = useDispatch();
  const lives = useSelector((state) => state.zuzenekoak);
  let [searchParams, setSearchParams] = useSearchParams();
  const [containerBgCHandler, containerBgC] = ParamManager(
    'containerBgC',
    '255-255-255',
  );
  const [containerBgOpHandler, containerBgOp] = ParamManager(
    'containerBgOp',
    '0',
  );
  const [containerWidthHandler, containerWidth] = ParamManager(
    'containerBgC',
    '125',
  );
  const [containerRadiusHandler, containerRadius] = ParamManager(
    'containerBgC',
    '10',
  );
  useEffect(() => {
    dispatch(getZuzenekoak(twitzlariList));
    const interval = setInterval(
      () => dispatch(getZuzenekoak(twitzlariList)),
      5000,
    );
    return () => clearInterval(interval);
  }, [dispatch, twitzlariList]);
  return (
    <div>
      {searchParams.get('probatzen') && (
        <Segment basic className="tools-container">
          <Grid columns={2}>
            <Grid.Column>
              <Segment>
                <h3>Zerrendaren atzeko planoa</h3>
                <List>
                  <List.Item>
                    <Grid columns={2}>
                      <Grid.Column width={6}>
                        <span>Kolorea:</span>
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          type="color"
                          value={rgbToHex(
                            containerBgC.split('-')[0],
                            containerBgC.split('-')[1],
                            containerBgC.split('-')[2],
                          )}
                          onChange={(e) =>
                            containerBgCHandler(hexToRgb(e.target.value))
                          }
                        />
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid columns={2}>
                      <Grid.Column width={6}>
                        <span>Opakotasuna:</span>
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={containerBgOp}
                          onChange={(e) => containerBgOpHandler(e.target.value)}
                        />
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid columns={2}>
                      <Grid.Column width={6}>
                        <span>Zabalera:</span>
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          type="number"
                          value={containerWidth}
                          onChange={(e) =>
                            containerWidthHandler(e.target.value)
                          }
                        />
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                  <List.Item>
                    <Grid columns={2}>
                      <Grid.Column width={6}>
                        <span>Ertzen erradioa:</span>
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          type="number"
                          value={containerRadius}
                          onChange={(e) =>
                            containerRadiusHandler(e.target.value)
                          }
                          max="50"
                        />
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      )}
      {lives.items.length > 0 ? (
        <Segment
          style={{
            backgroundColor: `rgba(${containerBgC.replaceAll(
              '-',
              ',',
            )},${containerBgOp})`,
            width: `${containerWidth}px`,
            borderRadius: `${containerRadius}%`,
          }}
          basic
        >
          <List className="lives-list">
            {lives.items.map((erabiltzailea, index) => (
              <List.Item key={index}>
                <List.Icon name="circle" color="red" id="animated" />
                {erabiltzailea.user_login}
              </List.Item>
            ))}
          </List>
        </Segment>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Zuzenean;
