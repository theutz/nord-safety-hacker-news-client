import axios from 'axios';

const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
});

export const all = axios.all;
export const spread = axios.spread;

export default client;