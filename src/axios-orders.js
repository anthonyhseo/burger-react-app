import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-app-d791e.firebaseio.com/'
});

export default instance;