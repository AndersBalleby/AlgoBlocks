import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_text"] = function (block, generator) {
  const text = JSON.stringify(block.getFieldValue("TEXT") || "");

  return [text, Order.ATOMIC];
};

javascriptGenerator.forBlock["cb_text_join"] = function (block, generator) {
  const a = generator.valueToCode(block, "A", Order.RELATIONAL) || "";
  const b = generator.valueToCode(block, "B", Order.RELATIONAL) || "";

  return [`String(${a}).concat(String(${b}))`, Order.FUNCTION_CALL];
};

javascriptGenerator.forBlock["cb_text_length"] = function (block, generator) {
  const value = generator.valueToCode(block, "VALUE", Order.RELATIONAL) || "";

  return [`${value}.length`, Order.MEMBER];
};

javascriptGenerator.forBlock["cb_text_print"] = function (block, generator) {
  const value = generator.valueToCode(block, "TEXT", Order.RELATIONAL) || "";

  return `console.log(${value});\n`;
};

javascriptGenerator.forBlock["cb_text_isEmpty"] = function (block, generator) {
  const value = generator.valueToCode(block, "VALUE", Order.RELATIONAL) || "";

  return [`${value}.length === 0`, Order.CONDITIONAL];
};
