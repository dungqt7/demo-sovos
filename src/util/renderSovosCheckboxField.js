import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import UnstyledSovosCheckbox from 's1-ui/sovos-checkbox';

const renderSovosCheckboxField = ({ input, label, className }) => (
  <FormControlLabel
    className={ className }
    control={
      <UnstyledSovosCheckbox
        checked={ input.value ? true : false }
        onChange={ input.onChange }
      />
    }
    label={ label }
  />
);

export default renderSovosCheckboxField;