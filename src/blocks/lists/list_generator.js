import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_lists_create_with"] = function (
  block,
  generator,
) {
  const a = generator.valueToCode(block, "ADD0", Order.NONE) || "null";
  const b = generator.valueToCode(block, "ADD1", Order.NONE) || "null";
  const c = generator.valueToCode(block, "ADD2", Order.NONE) || "null";

  return [`[${a}, ${b}, ${c}]`, Order.ATOMIC];
};

javascriptGenerator.forBlock["cb_lists_length"] = function (block, generator) {
  const value = generator.valueToCode(block, "VALUE", Order.MEMBER) || "[]";

  return [`${value}.length`, Order.MEMBER];
};

javascriptGenerator.forBlock["cb_lists_getIndex"] = function (
  block,
  generator,
) {
  const at = generator.valueToCode(block, "AT", Order.NONE) || "0";
  const value = generator.valueToCode(block, "VALUE", Order.MEMBER) || "[]";

  return [`${value}[${at}]`, Order.MEMBER];
};

javascriptGenerator.forBlock["cb_lists_setIndex"] = function (
  block,
  generator,
) {
  const at = generator.valueToCode(block, "AT", Order.NONE) || "0";
  const list = generator.valueToCode(block, "LIST", Order.MEMBER) || "[]";
  const to = generator.valueToCode(block, "TO", Order.NONE) || "null";

  return `${list}[${at}] = ${to};\n`;
};

javascriptGenerator.forBlock["cb_lists_isEmpty"] = function (block, generator) {
  const value = generator.valueToCode(block, "VALUE", Order.MEMBER) || "[]";

  return [`${value}.length === 0`, Order.EQUALITY];
};

javascriptGenerator.forBlock["cb_lists_indexOf"] = function (block, generator) {
  const find = generator.valueToCode(block, "FIND", Order.NONE) || "null";
  const value = generator.valueToCode(block, "VALUE", Order.MEMBER) || "[]";

  return [`${value}.indexOf(${find})`, Order.FUNCTION_CALL];
};
