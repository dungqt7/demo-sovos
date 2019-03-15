const validateSovosAmountNumber = (amount, canNotBlank = false) => {
  let amountError = '';
  if (amount == null || typeof amount === undefined || amount === '') {
    if (canNotBlank) {
      amountError = 'This field can not be blank';
    }
  } else {
    if (isNaN(amount)) {
      amountError = 'This field must be a number';
    } else {
      const patt = new RegExp(/^\d{1,12}(\.\d{1,8})?$/);
      if (!patt.test(amount)) {
        amountError = 'Character Limit: 12 characters before the decimal point and 8 characters after';
      }
    }
  }
  return amountError;
};
export default validateSovosAmountNumber;