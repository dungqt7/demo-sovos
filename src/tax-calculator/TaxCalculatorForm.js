import { SovosPageLayout } from 's1-ui/sovos-global-layout';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/moment';
import ActionBar from './components/ActionBar/ActionBar';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import taxCalculatorFormValidate from './taxCalculatorFormValidate';
import React from 'react';
import CalculationSetup from './components/CalculationSetup/CalculationSetup';
import LineItemDefault from './components/LineItemDefaults/LineItemDefaults';

import DataPointLineItems from './components/DataPointLineItems/DataPointLineItems';

class TaxCalculatorForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <SovosPageLayout titleElements={ [{ text: 'Taxcalculator' }] }>
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
          <form onSubmit={ handleSubmit }>
            <ActionBar
              isHeader
              onReset={ reset }
            />
            <CalculationSetup />
            <LineItemDefault />
            <DataPointLineItems />
            <ActionBar onReset={ reset } />
          </form>
        </MuiPickersUtilsProvider>
      </SovosPageLayout>);
  }
}

TaxCalculatorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

const TaxCalculatorReduxForm = reduxForm({
  form: 'TaxCaculatorForm',
  validate: taxCalculatorFormValidate
})(TaxCalculatorForm);

export default TaxCalculatorReduxForm;
