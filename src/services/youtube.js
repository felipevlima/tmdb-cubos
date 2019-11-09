import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.youtube.com',
});

export default youtube;
