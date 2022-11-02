import { Icon } from 'semantic-ui-react';
import React from 'react';
import twitzlariak from './twitzlariak.json';
export const KLIP_ORDENAZIOA = [
  {
    key: '-created_at',
    value: '-created_at',
    text: <>Berrienetik zaharrenera</>,
  },
  {
    key: 'created_at',
    value: 'created_at',
    text: <>Zaharrenetik berrienera</>,
  },
  {
    key: '-view_count',
    value: '-view_count',
    text: <>Ikusienak aurrena</>,
  },
  {
    key: 'broadcaster_name',
    value: 'broadcaster_name',
    text: (
      <>
        Streamerra
        <Icon name="sort alphabet down" />
      </>
    ),
  },
  {
    key: '-broadcaster_name',
    value: '-broadcaster_name',
    text: (
      <>
        Streamerra
        <Icon name="sort alphabet up" />
      </>
    ),
  },
  {
    key: 'creator_name',
    value: 'creator_name',
    text: (
      <>
        Egilea
        <Icon name="sort alphabet down" />
      </>
    ),
  },
  {
    key: '-creator_name',
    value: '-creator_name',
    text: (
      <>
        Egilea
        <Icon name="sort alphabet up" />
      </>
    ),
  },
];

export const TWITZLARI_AUKERAK = [
  ...twitzlariak.twitzlariak.map((twitzlaria) => {
    return {
      key: twitzlaria,
      value: twitzlaria,
      text: twitzlaria,
    };
  }),
];
