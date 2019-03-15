import { Field } from 'redux-form';
import React from 'react';
import PropTypes from 'prop-types';
import SovosIconButton from 's1-ui/sovos-icon-button';
import ActionDelete from '@material-ui/icons/Clear';
import renderSovosTextField from './renderSovosTextField';


export default function SovosSimpleDynamicTextField({ title, fieldName, labelInput, onRemoveField, ...customs }) {
  return (
    <div>
      <div style={ { display: 'flex', justifyContent: 'space-between' } }>
        <h5>{title}</h5>
        <SovosIconButton
          size="medium"
          onClick={ onRemoveField }
        >
          <ActionDelete />
        </SovosIconButton>
      </div>
      <Field
        name={ fieldName }
        component={ renderSovosTextField }
        { ...customs }
        label={ labelInput }
      />
    </div>
  );
}

SovosSimpleDynamicTextField.propTypes = {
  title: PropTypes.any.isRequired,
  fieldName: PropTypes.any.isRequired,
  labelInput: PropTypes.any.isRequired,
  onRemoveField: PropTypes.any.isRequired
};
