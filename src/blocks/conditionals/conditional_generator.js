import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_controls_if"] = function (block, generator) {
  const condition = generator.valueToCode(block, "IF0", Order.NONE) || "false";
  const body = generator.statementToCode(block, "DO0");

  return `if (${condition}) {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_controls_ifelse"] = function (
  block,
  generator,
) {
  const condition = generator.valueToCode(block, "IF0", Order.NONE) || "false";
  const body = generator.statementToCode(block, "DO0");
  const elseBody = generator.statementToCode(block, "ELSE");

  return `if (${condition}) {\n${body}} else {\n${elseBody}}\n`;
};
