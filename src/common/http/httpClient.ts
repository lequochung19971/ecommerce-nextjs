import axios from 'axios';
import QueryString from 'qs';

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: {
    serialize: (params) => {
      return QueryString.stringify(params);
    },
  },
});
