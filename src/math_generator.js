import { Order } from "blockly/javascript"

let orderSigns = {
  [Order.ADDITION]: '+',
  [Order.SUBTRACTION]: '-',
  [Order.MULTIPLICATION]: '*',
  [Order.DIVISION]: '/',
};

function createNewMathFunction(order) {
  return function(block, generator) {
    const num1 = generator.valueToCode(block, 'num1', order) || '0';
    const num2 = generator.valueToCode(block, 'num2', order) || '0';
    
    let code;
    if(order === Order.DIVISION) {
      const safeDivide = generator.provideFunction_(
        'safeDivide',
`function ${generator.FUNCTION_NAME_PLACEHOLDER_}(a, b) {
  if(b === 0) {
    alert('Fejl: Du kan ikke dividere med nul!');
    throw new Error('Division med nul');
  }

  return a / b;
}`
      );
      code = `${safeDivide}(${num1}, ${num2})`;
    } else {
      code = `(${num1} ${orderSigns[order]} ${num2})`;
    }

    return [code, order];
  }
}

export const addition = createNewMathFunction(Order.ADDITION);
export const subtraction = createNewMathFunction(Order.SUBTRACTION);
export const multiplication = createNewMathFunction(Order.MULTIPLICATION);
export const division = createNewMathFunction(Order.DIVISION);