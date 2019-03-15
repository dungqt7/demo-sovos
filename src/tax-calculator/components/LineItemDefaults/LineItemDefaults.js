import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import renderSovosRadioGroup from '../../../util/renderSovosRadioGroup';
import { Field, FieldArray } from 'redux-form';
import Radio from '@material-ui/core/Radio';

import renderSovosSelectField from '../../../util/renderSovosSelectField';
import AdditionalFieldDropDown from './dynamic-components/AdditionalFields';

import DataTransaction from './constant/TransactionTypeConstant';
import {
  LINE_ITEM_DEFAULT_DEBIT_CREDIT_INDICATOR,
  LINE_ITEM_DEFAULT_TRANS_TYPE_CODE,
  LINE_ITEM_DEFAULT_ADD_FIELDS
} from './constant/FieldsName';

const transactionType = DataTransaction;

const styles = {
  cardContent: { padding: '20px', borderTop: '1px solid #e6e6e6', borderBottom: '1px solid #e6e6e6' },
  cardHeader: { padding: '20px' },
  dropdownAddForm: { width: '40%' },
  footer: { padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' },
  transactionType: { width: '480px', marginTop: '40px', marginBottom: '20px' },
  radioCardType: { color: '#000000' },
  radioCardGroup: { flexDirection: 'row' }
};

function LineItemDefault(props) {
  const { classes } = props;
  return (
    <Card>
      <CardHeader
        className={ classes.cardHeader }
        title="Line Items Defaults"
        subheader="Settings in this section apply to all added Data Point Line items; and can be edited per line"
      />
      <CardContent
        className={ classes.cardContent }
      >
        <Field
          name={ LINE_ITEM_DEFAULT_DEBIT_CREDIT_INDICATOR }
          component={ renderSovosRadioGroup }
          className={ classes.radioCardGroup }
        >
          <FormControlLabel
            value="1"
            control={ <Radio style={ styles.radioCardType } /> }
            label="Debit"
          />
          <FormControlLabel
            value="2"
            control={ <Radio style={ styles.radioCardType } /> }
            label="Credit"
          />
        </Field>
        <Field
          name={ LINE_ITEM_DEFAULT_TRANS_TYPE_CODE }
          label="transaction type"
          className={ classes.transactionType }
          component={ renderSovosSelectField }
        >
          {transactionType[0].map(v => (
            <MenuItem
              key={ v.id }
              value={ v.id }
            >
              {v.name}
            </MenuItem>))}
          <MenuItem
            key={ -1 }
            disabled
          />
          {transactionType[1].map(v => (
            <MenuItem
              key={ v.id }
              value={ v.id }
            >
              {v.name}
            </MenuItem>))}
        </Field>
      </CardContent>
      <div className={ classes.footer }>
        <FieldArray
          name={ LINE_ITEM_DEFAULT_ADD_FIELDS }
          component={ AdditionalFieldDropDown }
        />
      </div>
    </Card>
  );
}

LineItemDefault.propTypes = {
  classes: PropTypes.any.isRequired
};
LineItemDefault.defaultProps = {
  classes: () => { }
};

export default withStyles(styles)(LineItemDefault);