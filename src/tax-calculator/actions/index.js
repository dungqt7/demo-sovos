// import axios from 'axios';
import { FETCH_ORGANIZATION_INFO } from './types';
import { getHttp } from '../api/axios';
// const headers = {
//   'Cache-Control': 'no-cache',
//   'Content-Type': 'application/json'
// };

// export const fetchInitialData = () => dispatch => {
//   axios({
//     method: 'get',
//     url: 'http://5c89d61141fb3f001434be55.mockapi.io/api/org-setting',
//     headers,
//     data: { userName: '', orgCode: '', euRequests: '' }
//   }).then(response => {
//     // const data = {'status':400,'message':'usrname is missing'};
//     console.log('response',response);
//     dispatch({type: FETCH_ORGANIZATION_INFO, payload: response.data });

//   })
//     .catch(error => {
//       console.log(error);
//     });
// };

export const fetchInitialData = () => dispatch => {
  getHttp('http://5c89d61141fb3f001434be55.mockapi.io/api/org-setting').then(response => {
    // const data = {'status':400,'message':'usrname is missing'};
    console.log('response',response);
    dispatch({type: FETCH_ORGANIZATION_INFO, payload: response });

  })
    .catch(error => {
      console.log(error);
    });
};
