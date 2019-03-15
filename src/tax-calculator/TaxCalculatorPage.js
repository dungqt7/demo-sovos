import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { fetchInitialData } from './actions';
import { connect } from 'react-redux';

import TaxCalculatorForm from './TaxCalculatorForm';

const styles = {
  overLayer: {
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    zIndex: '3',
    borderRadius: '3px'
  }
};

class TaxCalculatorPage extends Component {
  componentDidMount() {
    this.props.fetchDefaultData();
  }

  render() {
    const submit = (values) => {
      alert(JSON.stringify(values, null, 4));
    };
    console.log('props = ', this.props);
    if (this.props.organizationInfo) {
      let { debCredIndr, trnTpCd, txCalcTpCd } = this.props.organizationInfo.organizationDefaultSets;
      const initialValues = {
        docDt: new Date(),
        debCredIndr: debCredIndr || '1',
        trnTpCd,
        txCalcTpCd,
        currn: 'USD',
        isAudit: false,
        additionalFields: [],
        renderDataPoints: [
          {}
        ],
        AddDataPoints: [],
        lineItemDefaultAddFields: []
      };

      return (
        <TaxCalculatorForm
          initialValues={ initialValues }
          onSubmit={ submit }
        />
      );
    } else {
      return (
        <div
          className="euLoadingIndicator"
          style={ styles.overLayer }
        >
          <LinearProgress mode="indeterminate" />
        </div>
      );
    }
  }
}

TaxCalculatorPage.propTypes = {
  fetchDefaultData: PropTypes.any.isRequired,
  organizationInfo: PropTypes.any,
};
TaxCalculatorPage.defaultProps = {
  organizationInfo: {}
};

export default connect((state) => ({ organizationInfo: state.organizationInfo }),
  {
    fetchDefaultData: fetchInitialData
  }
)(TaxCalculatorPage);

