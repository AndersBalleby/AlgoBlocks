import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_procedures_defnoreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const body = generator.statementToCode(block, "STACK");

  return `function ${name}(liste, værdi) {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_procedures_defreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const body = generator.statementToCode(block, "STACK");
  const returnValue =
    generator.valueToCode(block, "RETURN", Order.NONE) || "undefined";

  return `function ${name}(liste, værdi) {\n${body}  return ${returnValue};\n}\n`;
};

javascriptGenerator.forBlock["cb_procedures_ifreturn"] = function (
  block,
  generator,
) {
  const value =
    generator.valueToCode(block, "VALUE", Order.NONE) || "undefined";

  return `return ${value};\n`;
};

/*
javascriptGenerator.forBlock["cb_procedures_callnoreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const arg0 = generator.valueToCode(block, "ARG0", Order.NONE) || "null";
  const arg1 = generator.valueToCode(block, "ARG1", Order.NONE) || "null";

  return `${name}(${arg0}, ${arg1});\n`;
};

javascriptGenerator.forBlock["cb_procedures_callreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const arg0 = generator.valueToCode(block, "ARG0", Order.NONE) || "null";
  const arg1 = generator.valueToCode(block, "ARG1", Order.NONE) || "null";

  return [`${name}(${arg0}, ${arg1})`, Order.FUNCTION_CALL];
};
*/
