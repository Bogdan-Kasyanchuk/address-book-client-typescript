import axios from 'axios';
import { ITokenService } from '../interfaces';

// axios.defaults.baseURL = 'http://localhost:3001/api';
axios.defaults.baseURL = 'https://bogkas-addressbook.herokuapp.com/api';

const tokenService: ITokenService = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default tokenService;
