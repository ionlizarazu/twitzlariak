import secrets from './secrets.json';

import axios from 'axios';

const TwitchAPI = axios.create({
  baseURL: 'https://api.twitch.tv/helix/',
  headers: {
    'client-id': secrets.client_id,
    Authorization: 'Bearer ' + secrets.token,
  },
});

export const GetZuzenekoak = async (twitzlariList) => {
  const response = await TwitchAPI.get(
    'streams?user_login=' + twitzlariList.join('&user_login='),
  );
  return response.data.data;
};

export const GetErabiltzailearenBideoak = async (id) => {
  const response = await TwitchAPI.get('videos?user_id=' + id);
  return response.data.data;
};

//   TwitchAPI.get('videos?user_id=' + user.id).then((response) => {
//     response.data.data.map( (bideoa) => {
//         new Date(bideoa.created_at)>atzeraData && (azkenBideo = [...azkenBideo, bideoa])
//     })
//     setBideoak(azkenBideo)
// })

export const GetErabiltzaileenKlipak = async (users) => {
  const result = [];
  await Promise.all(
    users.map(async (user) => {
      const response = await TwitchAPI.get(
        `clips?broadcaster_id=${user.id}&first=100`,
      );
      result.push({
        user_id: user.id,
        username: user.display_name,
        clips: response?.data?.data,
      });
    }),
  );
  return result;
};

export const GetErabiltzaileak = async (users) => {
  const response = await TwitchAPI.get('users?login=' + users.join('&login='));
  return response.data.data;
};
export default TwitchAPI;
