import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_variables_get"] = function (block) {
  const variable = block.getFieldValue("VAR") || "variabel";

  return [variable, Order.ATOMIC];
};

javascriptGenerator.forBlock["cb_variables_set"] = function (block, generator) {
  const variable = block.getFieldValue("VAR") || "variabel";
  const value = generator.valueToCode(block, "VALUE", Order.NONE) || "null";

  return `${variable} = ${value};\n`;
};

javascriptGenerator.forBlock["cb_variables_change"] = function (
  block,
  generator,
) {
  const variable = block.getFieldValue("VAR") || "variabel";
  const delta = generator.valueToCode(block, "DELTA", Order.NONE) || "0";

  return `${variable} += ${delta};\n`;
};
