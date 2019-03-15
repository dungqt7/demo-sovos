import React from 'react';
import { withStyles } from '@material-ui/core';
import SovosButtonAddFields from '../../../util/AdditionalFields/SovosButtonAddFields';
import PropTypes from 'prop-types';


const styles = () => ({
  mt20: {
    marginTop: 20
  },
  dividernoPadding: {
    marginLeft: '-20px',
    marginRight: '-20px'
  }
});
const AdditionalFields = ({fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      { submitFailed && error && <span>{ error }</span> }
    </div>
    <div style={ {
      padding: '0',
    } }
    >
      {
        fields.map((fieldPath, index) => {
          switch (fields.get(index).type) {
            case 'ACCOUNTING_DATE': {
              return (
                <h1>ACCOUNTING_DATE</h1>
              );
            }
            case 'DATA_OF_SERVICE_PERFORMANCE': {
              return (
                <h1>DATA_OF_SERVICE_PERFORMANCE</h1>
              );
            }
            case 'CUSTOMER_VENDOR': {
              return (
                <h1>CUSTOMER_VENDOR</h1>
              );
            }
            case 'DELIVERY_TERMS': {
              return (
                <h1>DELIVERY_TERMS</h1>
              );
            }
            case 'DISCOUNTS_DETAILS': {
              return (
                <h1>DISCOUNTS_DETAILS</h1>
              );
            }

          }
        })
      }
    </div>
    <div style={ { padding: '20px' } }>
      <SovosButtonAddFields
        label="Add Calculation Set-up Items"
        // items={ items }
        onItemSelected={ (item) => {
          fields.push({ type: item.type });
        } }
        itemsSelected={ fields.getAll() }
      />

    </div>

  </div>
);

AdditionalFields.propTypes = {
  fields: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
};


export default withStyles(styles)(AdditionalFields);
