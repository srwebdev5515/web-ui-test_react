import { apiCall } from './api';

const url = 'https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json';

export const fetchTickets = () => {
  // return apiCall({
  //   method: 'get',
  //   url,
  //   headers: {
  //     withCredentials: false
  //   }
  // });
  return fetch(url)
    .then(res => res.json());
};
