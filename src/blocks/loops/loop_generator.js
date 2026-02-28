import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_controls_for"] = function (block, generator) {
  const variable = block.getFieldValue("VAR") || "i";
  const from = generator.valueToCode(block, "FROM", Order.NONE) || "0";
  const to = generator.valueToCode(block, "TO", Order.NONE) || "0";
  const body = generator.statementToCode(block, "DO");

  return `for (let ${variable} = ${from}; ${variable} <= ${to}; ${variable}++) {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_controls_forEach"] = function (
  block,
  generator,
) {
  const variable = block.getFieldValue("VAR") || "element";
  const list = generator.valueToCode(block, "LIST", Order.NONE) || "[]";
  const body = generator.statementToCode(block, "DO");

  return `for (const ${variable} of ${list}) {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_controls_whileUntil"] = function (
  block,
  generator,
) {
  const mode = block.getFieldValue("MODE");
  const condition = generator.valueToCode(block, "BOOL", Order.NONE) || "false";
  const body = generator.statementToCode(block, "DO");

  const actualCondition = mode === "UNTIL" ? `!(${condition})` : condition;

  return `while (${actualCondition}) {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_controls_flow_statements"] = function (block) {
  const flow = block.getFieldValue("FLOW");

  const flows = {
    BREAK: "break",
    CONTINUE: "continue",
  };

  return `${flows[flow]};\n`;
};
