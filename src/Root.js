import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter } from 'react-router-dom';

import SovosProvider from 's1-ui/sovos-provider';
import { Provider } from 'react-redux';
import App from './app/App';
import { createMuiTheme } from '@material-ui/core/styles';
import { SovosEnterprise } from 's1-ui/themes';
import { history } from './store/configstore';

const theme = createMuiTheme({
  typography: SovosEnterprise.typography
});

class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <SovosProvider theme={ theme }>
        <Provider store={ store }>
          <BrowserRouter>
            <App history={ history } />
          </BrowserRouter>
        </Provider>
      </SovosProvider>
    );
  }
}

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired
};
