import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';

function renderSovosRadioGroup({ input, children, ...rest }) {
  return (
    <div>
      <FormControl>
        <RadioGroup
          { ...input }
          { ...rest }
        >
          { children }
        </RadioGroup>
      </FormControl>
    </div>
  );
}

renderSovosRadioGroup.propTypes = {
  input: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

export default renderSovosRadioGroup;