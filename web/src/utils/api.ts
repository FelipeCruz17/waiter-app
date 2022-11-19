import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.24.234.182:3030'
});
