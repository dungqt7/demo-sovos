import { FETCH_ORGANIZATION_INFO } from '../actions/types';


export default (state = null, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION_INFO:
      return { ...action.payload };
    default:
      return state;
  }
};
