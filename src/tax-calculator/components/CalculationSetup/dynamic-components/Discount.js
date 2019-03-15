import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderSovosSelectField from '../../../../util/renderSovosSelectField';
import renderSovosTextField from '../../../../util/renderSovosTextField';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const styles = {
  w250: {
    width: 250
  },
  w400: {
    width: 400
  },
  mt30: {
    marginTop: 30
  }
};
const Discount = ({ classes, typeInputName, amountInputName }) => {
  console.log('classes = ', classes);
  return (
    <div
      className={ classNames(classes.mt30) }
      style={ { display: 'flex' } }
    >
      <Field
        className={ classes.w400 }
        component={ renderSovosSelectField }
        label="Discount Type"
        name={ typeInputName }
      >
        <MenuItem value={ 1 }>Discount</MenuItem>
        <MenuItem value={ 2 }>Prompt Payment Discounts</MenuItem>
        <MenuItem value={ 3 }>Quantity Discounts</MenuItem>
        <MenuItem value={ 4 }>Retailer Coupon</MenuItem>
        <MenuItem value={ 5 }>Manufacturer Coupon</MenuItem>
        <MenuItem value={ 6 }>Rebates</MenuItem>
        <MenuItem value={ 7 }>Trade-Ins</MenuItem>
        <MenuItem value={ 8 }>Reward Program/Retailer Promotions</MenuItem>
        <MenuItem value={ 9 }>Reward Program/Manufacturer Promotions</MenuItem>
        <MenuItem value={ 10 }>Reward Program/Credit Card Company</MenuItem>
        <MenuItem value={ 11 }>Gift Voucher</MenuItem>
      </Field>
      <Field
        component={ renderSovosTextField }
        label="Amount"
        name={ amountInputName }
        type="number"
      />
    </div>);
};

Discount.propTypes = {
  typeInputName: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  amountInputName: PropTypes.any.isRequired,
};

export default withStyles(styles)(Discount);