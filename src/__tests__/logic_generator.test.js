import { javascriptGenerator } from "blockly/javascript";
import { describe, expect, it } from "vitest";
import "../blocks/logic/logic_generator";

describe("cb_logic_compare", () => {
  it.each([
    ["EQ", "2", "3", "2 === 3"],
    ["NEQ", "2", "3", "2 !== 3"],
    ["LT", "2", "3", "2 < 3"],
    ["LTE", "2", "3", "2 <= 3"],
    ["GT", "2", "3", "2 > 3"],
    ["GTE", "2", "3", "2 >= 3"],
  ])("generates %s correctly", (operator, num1, num2, expected) => {
    const block = {
      getFieldValue: (field) => (field === "OP" ? operator : null),
    };
    const generator = {
      valueToCode: (_, input) => (input === "A" ? num1 : num2),
    };

    const [code] = javascriptGenerator.forBlock["cb_logic_compare"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_logic_operation", () => {
  it.each([
    ["AND", "input1", "input2", "input1 && input2"],
    ["OR", "input1", "input2", "input1 || input2"],
  ])("generates %s correctly", (operator, input1, input2, expected) => {
    const block = {
      getFieldValue: (field) => (field === "OP" ? operator : null),
    };
    const generator = {
      valueToCode: (_, input) => (input === "A" ? input1 : input2),
    };

    const [code] = javascriptGenerator.forBlock["cb_logic_operation"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_logic_boolean", () => {
  it.each([
    ["TRUE", "true"],
    ["FALSE", "false"],
  ])("generates %s correctly", (operator, expected) => {
    const block = {
      getFieldValue: (field) => (field === "BOOL" ? operator : null),
    };
    const generator = {};

    const [code] = javascriptGenerator.forBlock["cb_logic_boolean"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_logic_negate", () => {
  it("generates NEGATION correctly", () => {
    const block = {};
    const generator = {
      valueToCode: (_, input) => (input === "BOOL" ? "true" : null),
    };

    const [code] = javascriptGenerator.forBlock["cb_logic_negate"](
      block,
      generator,
    );
    expect(code).toBe("!true");
  });
});

describe("cb_logic_null", () => {
  it("generates NULL correctly", () => {
    const block = {};
    const generator = {};

    const [code] = javascriptGenerator.forBlock["cb_logic_null"](
      block,
      generator,
    );
    expect(code).toBe("null");
  });
});
