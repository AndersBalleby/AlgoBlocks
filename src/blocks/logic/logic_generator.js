import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_logic_compare"] = function (block, generator) {
  const operators = {
    EQ: "===",
    NEQ: "!==",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">=",
  };

  const op = operators[block.getFieldValue("OP")];
  const a = generator.valueToCode(block, "A", Order.RELATIONAL) || "0";
  const b = generator.valueToCode(block, "B", Order.RELATIONAL) || "0";

  return [`${a} ${op} ${b}`, Order.EQUALITY];
};

javascriptGenerator.forBlock["cb_logic_operation"] = function (
  block,
  generator,
) {
  const op = block.getFieldValue("OP") === "AND" ? "&&" : "||";
  const order = op === "&&" ? Order.LOGICAL_AND : Order.LOGICAL_OR;

  const a = generator.valueToCode(block, "A", order) || "false";
  const b = generator.valueToCode(block, "B", order) || "false";

  return [`${a} ${op} ${b}`, order];
};

javascriptGenerator.forBlock["cb_logic_boolean"] = function (block) {
  const value = block.getFieldValue("BOOL") === "TRUE" ? "true" : "false";
  return [value, Order.ATOMIC];
};

javascriptGenerator.forBlock["cb_logic_negate"] = function (block, generator) {
  const value =
    generator.valueToCode(block, "BOOL", Order.LOGICAL_NOT) || "false";
  return [`!${value}`, Order.LOGICAL_NOT];
};

javascriptGenerator.forBlock["cb_logic_null"] = function () {
  return ["null", Order.ATOMIC];
};
