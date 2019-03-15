import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import organizationInfo from '../tax-calculator/reducers/organizationInfo';

export default combineReducers({
  form: formReducer,
  organizationInfo: organizationInfo
});
