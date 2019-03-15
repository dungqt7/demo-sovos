import * as FIELDSNAMES from './calculationSetupConstants';
import validateSovosBasicText from '../../../util/common-validate/validateSovosBasicText';
import validateSovosAmountNumber from '../../../util/common-validate/validateSovosAmountNumber';

const calculationSetupValidate = (values) => {
  const errors = {};

  /* Validate document number field name */
  errors[FIELDSNAMES.DOCUMENT_NUMBER_FIELD_NAME] =
    validateSovosBasicText(values[FIELDSNAMES.DOCUMENT_NUMBER_FIELD_NAME], false);
  /* Validate Additional fields */
  errors[FIELDSNAMES.ADDITIONAL_FIELDS_NAME] = [];
  const additionalFields = values[FIELDSNAMES.ADDITIONAL_FIELDS_NAME];
  errors[FIELDSNAMES.ADDITIONAL_FIELDS_NAME] = additionalFields.map(field => validateAdditionalField(field)
  );

  return errors;
};
const validateDiscounts = (discounts) => discounts.map((discount) => ({ amount: validateSovosAmountNumber(discount.amount, true) }));

const validateAdditionalField = (field) => {
  switch (field.type) {
    case FIELDSNAMES.CUSTOMS_DUTIES_FIELD_NAME: {
      return { amount: validateSovosAmountNumber(field.amount, true) };
    }

    case FIELDSNAMES.DELYVERY_AMOUNT_FIELD_NAME: {
      return { amount: validateSovosAmountNumber(field.amount, true) };
    }
    case FIELDSNAMES.DELYVERY_INSURANCE_FIELD_NAME: {
      return { amount: validateSovosAmountNumber(field.amount, true) };
    }
    case FIELDSNAMES.TRANSACTION_SOURCE_FIELD_NAME: {
      return { transactionSource: validateSovosBasicText(field.transactionSource, true) };
    }
    case FIELDSNAMES.DISCOUNTS_FIELDS_NAME: {
      return { discounts: validateDiscounts(field.discounts) };
    }

    default: {
      return {};
    }

  }
};

export default calculationSetupValidate;
