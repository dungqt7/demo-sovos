import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import renderSovosTextField from '../../../util/renderSovosTextField';
import renderSovosDatePicker from '../../../util/renderSovosDatePicker';
import renderSovosSelectField from '../../../util/renderSovosSelectField';
import renderSovosCheckboxField from '../../../util/renderSovosCheckboxField';
import * as FIELDSNAMES from './calculationSetupConstants';
import AdditionalFields from './dynamic-components/AdditionalFields';

const styles = (theme) => ({
  mt3: {
    marginTop: 3 * theme.spacing.unit
  },
  mt2: {
    marginTop: 2 * theme.spacing.unit
  },
  mt5: {
    marginTop: theme.spacing.unit * 5
  },
  w75: {
    width: '75%'
  },
  mlN1: {
    marginLeft: '-1px'
  },
  w250: {
    width: '250px'
  },
  w480: {
    width: '480px'
  },
  dBlock: {
    display: 'block'
  },
  mgTop40: { marginTop: '40px !important' },
  mgBottom20: { marginBottom: '20px !important' },
  card: { marginBottom: '20px' },
  cardContent: { padding: '20px !important', borderTop: '1px solid #e6e6e6' },
  cardContentAdditionalField: { padding: '0px !important' },
  cardHeader: { padding: '20px' },
  footer: { padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }
});


class TaxCaculatorForm extends Component {
  render() {
    let { classes } = this.props;
    return (
      <Card className={ classes.card }>
        <CardHeader
          className={ classes.cardHeader }
          title="Calculation Set-up"
          subheader="Settings in this section apply to the entire caculation"
        />
        <CardContent className={ classes.cardContent }>
          <Field
            tooltip="Leave blank to apply the system date"
            className={ classNames(classes.dBlock, classes.w250, classes.mgTop40) }
            name={ FIELDSNAMES.DOCUMENT_DATE_FIELD_NAME }
            label="Document Date"
            component={ renderSovosDatePicker }
          /> {/*Duccument Date*/}


          <Field
            className={ classNames(classes.dBlock, classes.mgTop40, classes.w250) }
            name={ FIELDSNAMES.DOCUMENT_NUMBER_FIELD_NAME }
            label="Document Number"
            component={ renderSovosTextField }
          /> {/*Document number*/}


          <Field
            className={ classNames(classes.mgTop40, classes.w480) }
            name={ FIELDSNAMES.TAX_CACULATION_TYPE_FIELD_NAME }
            label="Tax Calculation Type"
            component={ renderSovosSelectField }
          >
            <MenuItem value={ 1 }>Forward calculation</MenuItem>
            <MenuItem value={ 2 }>Tax inclusive gross amount back calculation</MenuItem>
            <MenuItem value={ 5 }>Tax to gross calculation with force distribution</MenuItem>
            <MenuItem value={ 6 }>Tax to gross back calculation</MenuItem>
          </Field> {/*Tax cal type*/}
          <div>
            <Field
              className={ classNames(classes.mgTop40, classes.w250) }
              name={ FIELDSNAMES.CURRENCY_TYPE_FIELD_NAME }
              label="Currency Type"
              component={ renderSovosSelectField }
            >
              <MenuItem value={ 'USD' }>USD</MenuItem>
              <MenuItem value={ 'CAD' }>CAD</MenuItem>
              <MenuItem value={ 'AUD' }>AUD</MenuItem>
              <MenuItem value={ 'EUR' }>EUR</MenuItem>
              <MenuItem value={ 'GBP' }>GBP</MenuItem>
              <MenuItem value={ 'NZD' }>NZD</MenuItem>
              <MenuItem value={ 'MXN' }>MXN</MenuItem>
              <MenuItem value={ 'SEK' }>SEK</MenuItem>
              <MenuItem value={ 'JPY' }>JPY</MenuItem>
              <MenuItem value={ 'NOK' }>NOK</MenuItem>
              <br />
              <MenuItem value={ 'VND' }>VND</MenuItem>
            </Field> {/*curr type*/}
          </div>

          <div className={ classNames(classes.mgBottom20, classes.mgTop40) }>
            <Field
              className={ classNames(classes.mlN1, classes.w250) }
              name={ FIELDSNAMES.IS_AUDIT_FIELD_NAME }
              component={ renderSovosCheckboxField }
              label="Write to Audit"
            /> {/*write to audits*/}
          </div>

          <div className={ classes.cardContentAdditionalField }>
            <FieldArray
              name={ FIELDSNAMES.ADDITIONAL_FIELDS_NAME }
              component={ AdditionalFields }
            />
          </div>

        </CardContent>
      </Card>
    );
  }
}

TaxCaculatorForm.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(TaxCaculatorForm);
