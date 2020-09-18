import axios from 'axios';

const AxiosRequest = axios.create({
  baseURL: 'https://api.todoist.com/rest/v1',
  headers: {
    Authorization: 'Bearer {SEU_TOKEN}',
  },
});

export default AxiosRequest;
