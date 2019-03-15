import React from 'react';
import SovosTextField from 's1-ui/sovos-text-field';

const RenderTextField = (
  { input, label, meta: { touched,invalid, error }, ...custom },
) => (
  <SovosTextField
    label= { label }
    error={ touched && invalid }
    helperText = { touched && error }
    { ...input }
    { ...custom }
  />

);
export default RenderTextField;
