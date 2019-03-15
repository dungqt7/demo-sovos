import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SovosGlobalLayout } from 's1-ui/sovos-global-layout';
import { Home } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import HomePage from '../components/Home/HomePage';
import TaxCalculatorPage from '../tax-calculator/TaxCalculatorPage';

const HomeText = 'Home';
const Taxcalculator = 'Tax Calculator';
const orgA = { id: '0', name: 'ONameA', code: 'OCodeA' };
const orgB = { id: '1', name: 'ONameB', code: 'OCodeB' };
const orgList = [orgA, orgB];
const userName = 'TestUser';


const styles = () => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLink: HomeText,
    };
  }

  getNavProps() {
    return {
      BrandingProps: { productName: 'Global Tax Determination' },
      contexts: orgList,
      links: [
        {
          label: HomeText,
          action: () => {
            this.setState({ currentLink: HomeText }, () => this.props.history.push('/'));
          },
          icon: Home
        },
        {
          label: Taxcalculator,
          action: () => {
            this.setState({ currentLink: Taxcalculator }, () => this.props.history.push('/tax'));
          },
          icon: Home
        },
      ],
      selectedContext: orgList.length > 0 ? this.state.selectedContext || orgList[0] : { name: '', id: '0' },
      selectedLink: this.state.currentLink,
      initialSelectedLink: HomeText,
      setContext: (context) => {
        this.setState({ selectedContext: context });
      },
      FooterProps: {
        userName,
        userMenuItems: []
      }
    };

  }

  render() {

    return (
      <div>
        <SovosGlobalLayout NavigationProps={ this.getNavProps() }>
          <Switch>
            <Route
              exact
              path="/"
              component={ HomePage }
            />
            <Route
              exact
              path="/tax"
              component={ TaxCalculatorPage }
            />
          </Switch>
        </SovosGlobalLayout>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired
};

export default withStyles(styles)(withRouter(App));
