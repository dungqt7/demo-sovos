import axios from 'axios';


const headers = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json'
};


export const getHttp = (url) => axios({
  method: 'get',
  url: url,
  headers
})
  .then(response => response.data);

