import React from 'react';
import PropTypes from 'prop-types';
import SovosIconButton from 's1-ui/sovos-icon-button';
import ActionDelete from '@material-ui/icons/Clear';
import { FieldArray } from 'redux-form';
import SovosRaiseButton from 's1-ui/sovos-raised-button';

import Discount from './Discount';
import { connect } from 'react-redux';

const renderDiscounts = ({ defaultDiscountType, fields }) => {
  console.log('default = ', defaultDiscountType);
  return (
    fields.map((field, index) => (
      <div
        style={ { display: 'flex', alignItems: 'flex-end' } }
        key={ index }
      >
        <Discount
          typeInputName={ `${ field }.type` }
          amountInputName={ `${ field }.amount` }
        />

        { fields.length > 1 || index > 0 ? (
          <SovosRaiseButton
            style={ { marginLeft: 25 } }
            color="secondary"
            onClick={ () => fields.remove(index) }
          >
            Remove
          </SovosRaiseButton>) : <></> }

        <span style={ { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' } } />
        { index + 1 === fields.length && fields.length < 5 ?
          (
            <SovosRaiseButton
              style={ { alignSeft: 'flex-end' } }
              color="secondary"
              onClick={ () => fields.push({ type: defaultDiscountType, amount: '' }) }
            >
              Add another type
            </SovosRaiseButton>
          ) : (<></>)
        }

      </div>
    ))
  );
}

const renderDiscountsWithDefault = connect((state) => ({
  defaultDiscountType: state.organizationInfo.organizationDefaultSets.discntTpCd
}))(renderDiscounts)

function Discounts({ fieldName, onRemoveDiscounts }) {
  // const { discounts, onRemoveDiscounts } = props;
  return (
    <div>
      <div style={ { display: 'flex', justifyContent: 'space-between', marginTop: 20 } }>
        <h5>Discounts</h5>
        <SovosIconButton
          size="medium"
          onClick={ onRemoveDiscounts }
        >
          <ActionDelete />
        </SovosIconButton>
      </div>
      <FieldArray
        name={ fieldName }
        component={ renderDiscountsWithDefault }
      />
    </div>
  );
}

Discounts.propTypes = {
  fieldName: PropTypes.any.isRequired,
  onRemoveDiscounts: PropTypes.any.isRequired,
};
Discounts.defaultProps = {};

export default Discounts;
