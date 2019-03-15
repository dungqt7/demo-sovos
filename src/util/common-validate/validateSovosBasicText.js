const validateSovosBasicText = (text, canNotBlank = false) => {
  let textError = '';
  if (text) {
    if (text.length > 40) {
      textError = 'Maximun character limit is 40';
    } else {
      const patt = new RegExp(/^[a-zA-Z0-9\-\/]+$/);
      if (!patt.test(text)) {
        textError = 'Allowed character a-z A-Z 0-9 -/';
      }
    }
  } else {
    if (canNotBlank) {
      textError = 'This field can not be blank';
    }
  }
  return textError;
};

export default validateSovosBasicText;