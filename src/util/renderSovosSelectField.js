import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SovosSelect from 's1-ui/sovos-select';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const customStyle = {
  borderBottom: '0.7px solid #e6e6e6'
};

const renderSovosSelectField = (props) => {

  const {
    input, className, /*name, topLabel,*/ label, meta: { touched, error },
    children, ...custom
  } = props;
  return (
    <FormControl
      className={ className }
      error={ touched && error }
      { ...custom }
      style={ customStyle }
    >
      <InputLabel>{label}</InputLabel>
      <SovosSelect { ...input }>
        {children}
      </SovosSelect>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

renderSovosSelectField.propTypes = {
  input: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

export default renderSovosSelectField;
