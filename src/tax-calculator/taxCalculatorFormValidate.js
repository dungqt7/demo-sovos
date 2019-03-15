import calculationSetupvalidate from './components/CalculationSetup/calculationSetupValidate';
import lineItemsDefaultsValidate from './components/LineItemDefaults/lineItemDefaultsValidate';
import dataPointLineItemsValidate from './components/DataPointLineItems/dataPointLineItemsValidate';

const taxCalculatorFormValidate = (values) => {
  const errors = {
    ...calculationSetupvalidate(values),
    ...lineItemsDefaultsValidate(values),
    ...dataPointLineItemsValidate(values)
  };
  return errors;
};

export default taxCalculatorFormValidate;
