import * as FIELDSNAMES from '../calculationSetupConstants';
import PropTypes from 'prop-types';
import SovosSimpleDynamicTextField from '../../../../util/SovosSimpleDynamicTextField';
import React from 'react';
import Discounts from './Discounts';
import SovosButtonShowMenus from '../../../../util/SovosButtonShowMenus';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';

const styles = () => ({
  mt20: {
    marginTop: 20
  },
  dividernoPadding: {
    marginLeft: '-20px',
    marginRight: '-20px'
  }
});
const AdditionalFields = ({ defaultDiscountType, classes, fields, meta: { error, submitFailed } }) => {
  const items = [
    {
      type: FIELDSNAMES.CUSTOMS_DUTIES_FIELD_NAME,
      display: 'Customs/Duties/Tariffs Amount'
    },
    {
      type: FIELDSNAMES.DELYVERY_AMOUNT_FIELD_NAME,
      display: 'Delivery Amount'
    },
    {
      type: FIELDSNAMES.DELYVERY_INSURANCE_FIELD_NAME,
      display: 'Delivery Insurance Amount'
    },
    {
      type: FIELDSNAMES.TRANSACTION_SOURCE_FIELD_NAME,
      display: 'Transaction Source'
    },
    {
      type: FIELDSNAMES.DISCOUNTS_FIELDS_NAME,
      display: 'Discounts'
    }
  ];
  return (
    <div>
      <div>
        {submitFailed && error && <span>{error}</span>}
      </div>
      <div style={ {
        padding: '0',
      } }
      >
        {
          fields.map((fieldPath, index) => {
            switch (fields.get(index).type) {
              case FIELDSNAMES.CUSTOMS_DUTIES_FIELD_NAME: {
                return (
                  <>
                    <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
                    <SovosSimpleDynamicTextField
                      key={ index }
                      labelInput="Amount"
                      title="Customs/Duties Amount"
                      fieldName={ `${fieldPath}.amount` }
                      onRemoveField={ () => fields.remove(index) }
                      type="number"
                    />
                  </>
                );
              }
              case FIELDSNAMES.DELYVERY_AMOUNT_FIELD_NAME: {
                return (
                  <>
                    <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
                    <SovosSimpleDynamicTextField
                      key={ index }
                      labelInput="Amount"
                      title="Delvery Amount"
                      fieldName={ `${fieldPath}.amount` }
                      onRemoveField={ () => fields.remove(index) }
                      type="number"
                    />
                  </>
                );
              }
              case FIELDSNAMES.DELYVERY_INSURANCE_FIELD_NAME: {
                return (
                  <>
                    <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
                    <SovosSimpleDynamicTextField
                      key={ index }
                      labelInput="Amount"
                      title="Delivery Insurance Amount"
                      fieldName={ `${fieldPath}.amount` }
                      onRemoveField={ () => fields.remove(index) }
                    />
                  </>
                );
              }
              case FIELDSNAMES.TRANSACTION_SOURCE_FIELD_NAME: {
                return (
                  <>
                    <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
                    <SovosSimpleDynamicTextField
                      key={ index }
                      labelInput="Transaction Source"
                      title="Transaction Source"
                      fieldName={ `${fieldPath}.transactionSource` }
                      onRemoveField={ () => fields.remove(index) }
                    />
                  </>
                );
              }
              case FIELDSNAMES.DISCOUNTS_FIELDS_NAME: {
                return (
                  <>
                    <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
                    <Discounts
                      key={ index }
                      discounts={ fields.get(index).discounts }
                      onRemoveDiscounts={ () => fields.remove(index) }
                      fieldName={ `${fieldPath}.discounts` }
                    />
                  </>
                );
              }
              default: {
                return <h1>Pow</h1>;
              }
            }

          })
        }
      </div>
      <Divider className={ classNames(classes.mt20, classes.dividernoPadding) } />
      <div style={{ paddingTop: '20px' }}>
        <SovosButtonShowMenus
          label="Add Calculation Set-up Items"
          items={ items }
          onItemSelected={ (item) => {
            if (item.type === FIELDSNAMES.DISCOUNTS_FIELDS_NAME) {
              fields.push({ type: item.type, discounts: [{ type: defaultDiscountType, amount: '' }] });

            } else {
              fields.push({ type: item.type });
            }
          } }
          itemsSelected={ fields.getAll() }
        />

      </div>

    </div>
  );
};

AdditionalFields.propTypes = {
  classes: PropTypes.any.isRequired,
  fields: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
  defaultDiscountType: PropTypes.string
};

export default  connect((state) => ({
  defaultDiscountType: state.organizationInfo.organizationDefaultSets.discntTpCd
}))(withStyles(styles)(AdditionalFields));
