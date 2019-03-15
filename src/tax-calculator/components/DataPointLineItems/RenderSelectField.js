import React from 'react';
import SovosSelect from 's1-ui/sovos-select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const RenderSelectField = (
  { input, label,inputProps,name, meta: { touched, error }, children, ...custom },
) => (
  <FormControl error={ touched && error }>
    <InputLabel htmlFor={ name }>{label}</InputLabel>
    <SovosSelect
      { ...input }
      { ...custom }
      inputProps={ inputProps }
    >
      {children}
    </SovosSelect>
  </FormControl>
);

export default RenderSelectField;
