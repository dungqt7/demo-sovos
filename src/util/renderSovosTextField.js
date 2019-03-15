import React from 'react';
import PropTypes from 'prop-types';
import SovosTextField from 's1-ui/sovos-text-field';
import Tooltip from '@material-ui/core/Tooltip';


const renderSovosTextField = ({ tooltip, label, input, meta: { touched, invalid, error }, ...custom }) => {
  const textField = (
    <SovosTextField
      label={ label }
      error={ touched && invalid }
      helperText={ touched && error }
      { ...input }
      { ...custom }
    />
  );
  return tooltip ? (
    <Tooltip title={ tooltip }>
      {textField}
    </Tooltip>
  ) : (
      <>
        {textField}
      </>
  );
};

renderSovosTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
  tooltip: PropTypes.string
};

export default renderSovosTextField;