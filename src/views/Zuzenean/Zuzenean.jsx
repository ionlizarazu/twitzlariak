import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import twitzlariak from '../../config/twitzlariak.json';
import { getZuzenekoak } from '../../store/actions';
import { hexToRgb, rgbToHex } from '../../utils';

// const getLives = (twitzlariList, dispatch) => {
//   dispatch(getZuzenekoak(twitzlariList));
// };

const Zuzenean = (props) => {
  const twitzlariList = twitzlariak.twitzlariak;
  const dispatch = useDispatch();
  const lives = useSelector((state) => state.zuzenekoak);
  let [searchParams, setSearchParams] = useSearchParams();
  const itemBgCParam = searchParams.get('itemBgC') || '255-255-255';
  const [itemBgC, setItemBgC] = useState(itemBgCParam);
  const itemBgOpParam = searchParams.get('itemBgOp') || 0;
  const [itemBgOp, setItemBgOp] = useState(itemBgOpParam);
  const onChangeHandler = (value, setter, param) => {
    console.log('value', value);
    let newParams = {};
    for (const [key, value] of searchParams.entries()) {
      newParams[key] = value;
    }
    setSearchParams({ ...newParams, [param]: value });
    setter(value);
  };
  // console.log('itemBackground', itemBackground);
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
        <Segment>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={(e) =>
              onChangeHandler(e.target.value, setItemBgOp, 'itemBgOp')
            }
          ></input>
          <input
            type="color"
            // value={rgbToHex(
            //   itemBgC.split('-')[0],
            //   itemBgC.split('-')[1],
            //   itemBgC.split('-')[2],
            // )}
            onChange={(e) =>
              onChangeHandler(hexToRgb(e.target.value), setItemBgC, 'itemBgC')
            }
          />
        </Segment>
      )}
      {lives.items.length > 0 ? (
        <ul
          style={{
            backgroundColor: `rgba(${itemBgC.replaceAll(
              '-',
              ',',
            )},${itemBgOp})`,
          }}
        >
          {lives.items.map((erabiltzailea, index) => (
            <li key={index}>{erabiltzailea.user_login}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Zuzenean;
