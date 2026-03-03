import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_math_number"] = function (block) {
  const value = parseFloat(block.getFieldValue("NUM")) || "0";
  return [String(value), Order.ATOMIC];
};

javascriptGenerator.forBlock["cb_math_arithmetic"] = function (
  block,
  generator,
) {
  const operators = {
    ADD: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    POWER: "**",
  };

  const orders = {
    ADD: Order.ADDITION,
    MINUS: Order.SUBTRACTION,
    MULTIPLY: Order.MULTIPLICATION,
    DIVIDE: Order.DIVISION,
    POWER: Order.EXPONENTIATION,
  };

  const op = operators[block.getFieldValue("OP")];
  const order = orders[block.getFieldValue("OP")];
  const a = generator.valueToCode(block, "A", Order.RELATIONAL) || "0";
  const b = generator.valueToCode(block, "B", Order.RELATIONAL) || "0";

  if (order === Order.DIVISION && b === "0") {
    return [`/* division med nul er ikke tilladt */`, Order.ATOMIC];
  }

  return [`${a} ${op} ${b}`, order];
};

javascriptGenerator.forBlock["cb_math_modulo"] = function (block, generator) {
  const a = generator.valueToCode(block, "DIVIDEND", Order.RELATIONAL) || "0";
  const b = generator.valueToCode(block, "DIVISOR", Order.RELATIONAL) || "1";

  return [`${a} % ${b}`, Order.MODULUS];
};

javascriptGenerator.forBlock["cb_math_round"] = function (block, generator) {
  const operations = {
    ROUND: "Math.round",
    ROUNDUP: "Math.ceil",
    ROUNDDOWN: "Math.floor",
  };

  const op = operations[block.getFieldValue("OP")];
  const num = generator.valueToCode(block, "NUM", Order.RELATIONAL) || "0";

  return [`${op}(${num})`, Order.FUNCTION_CALL];
};

javascriptGenerator.forBlock["cb_math_single"] = function (block, generator) {
  const options = {
    ROOT: "Math.sqrt",
    ABS: "Math.abs",
  };

  const op = options[block.getFieldValue("OP")];
  const input = generator.valueToCode(block, "NUM", Order.RELATIONAL) || "0";

  return [`${op}(${input})`, Order.FUNCTION_CALL];
};

javascriptGenerator.forBlock["cb_math_random_int"] = function (
  block,
  generator,
) {
  const a = generator.valueToCode(block, "FROM", Order.RELATIONAL) || "0";
  const b = generator.valueToCode(block, "TO", Order.RELATIONAL) || "0";

  const code = `Math.floor(Math.random() * (${b} - ${a} + 1)) + ${a}`;
  return [code, Order.ADDITION];
};
