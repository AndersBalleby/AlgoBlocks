import { javascriptGenerator, Order } from "blockly/javascript";

javascriptGenerator.forBlock["cb_procedures_defnoreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const body = generator.statementToCode(block, "STACK");

  return `function ${name}() {\n${body}}\n`;
};

javascriptGenerator.forBlock["cb_procedures_defreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";
  const body = generator.statementToCode(block, "STACK");
  const returnValue =
    generator.valueToCode(block, "RETURN", Order.NONE) || "undefined";

  return `function ${name}() {\n${body}  return ${returnValue};\n}\n`;
};

javascriptGenerator.forBlock["cb_procedures_callnoreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";

  return `${name}();\n`;
};

javascriptGenerator.forBlock["cb_procedures_callreturn"] = function (
  block,
  generator,
) {
  const name = block.getFieldValue("NAME") || "minFunktion";

  return [`${name}()`, Order.FUNCTION_CALL];
};

javascriptGenerator.forBlock["cb_procedures_ifreturn"] = function (
  block,
  generator,
) {
  const condition =
    generator.valueToCode(block, "CONDITION", Order.NONE) || "false";
  const value =
    generator.valueToCode(block, "VALUE", Order.NONE) || "undefined";

  return `if (${condition}) { return ${value}; }\n`;
};
