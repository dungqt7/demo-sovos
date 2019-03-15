// import { DatePicker } from 'material-ui-pickers';
import React from 'react';
import SovosDatePicker from 's1-ui/sovos-datepicker';
// import SovosDatePicker from '../tax-calculator/just-for-test/SovosDatePicker';
import Tooltip from '@material-ui/core/Tooltip';


const SovosDatePickerForReduxForm = ({ onChange, ...props }) => {
  const onSovosDatePickerChange = (firstparam, value) => {
    onChange(value);
  };
  return (<SovosDatePicker
    { ...props }
    onChange={ onSovosDatePickerChange }
  />);
};

const renderSovosDatePicker = ({ className, tooltip, label, input, meta: { touched, invalid, error }, ...custom }) => {
  const datePicker = (
    <SovosDatePickerForReduxForm
      className={ className }
      label={ label }
      placeholder={ label }
      error={ touched && invalid }
      helperText={ touched && error }
      { ...input }
      { ...custom }
      animateYearScrolling={ false }
      keyboard

    />
  );

  return tooltip ? (
    <>
      <Tooltip title={ tooltip }>
        { datePicker }
      </Tooltip>
    </>
  ) : { datePicker };
};

export default renderSovosDatePicker;
