import axios from 'axios';

const API_URL = process.env.API_URL || 'https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test';

let axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 8000,
});

export const apiCall = async ({
  method,
  data = {},
  url,
  headers = {},
  timeout = 8000,
}) => {
  try {
    return await axiosInstance({
      method,
      data,
      url,
      headers,
      timeout,
    });
  } catch (err) {
    console.log(`Error in API call ${method?.toUpperCase()} ${url} >>> `, err);
    return null;
  }
};
