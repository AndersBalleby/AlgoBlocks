import { javascriptGenerator } from "blockly/javascript";
import { describe, expect, it } from "vitest";
import "../blocks/logic/logic_generator";
import { testBlock } from "./test_utils";

describe("cb_logic_compare", () => {
  it.each([
    ["EQ", "2", "3", "2 === 3"],
    ["NEQ", "2", "3", "2 !== 3"],
    ["LT", "2", "3", "2 < 3"],
    ["LTE", "2", "3", "2 <= 3"],
    ["GT", "2", "3", "2 > 3"],
    ["GTE", "2", "3", "2 >= 3"],
  ])("generates %s correctly", (operator, num1, num2, expected) => {
    expect(
      testBlock("cb_logic_compare", { OP: operator }, { A: num1, B: num2 }),
    ).toBe(expected);
  });
});

describe("cb_logic_operation", () => {
  it.each([
    ["AND", "input1", "input2", "input1 && input2"],
    ["OR", "input1", "input2", "input1 || input2"],
  ])("generates %s correctly", (operator, input1, input2, expected) => {
    expect(
      testBlock(
        "cb_logic_operation",
        { OP: operator },
        { A: input1, B: input2 },
      ),
    ).toBe(expected);
  });
});

describe("cb_logic_boolean", () => {
  it.each([
    ["TRUE", "true"],
    ["FALSE", "false"],
  ])("generates %s correctly", (operator, expected) => {
    expect(testBlock("cb_logic_boolean", { BOOL: operator }, {})).toBe(
      expected,
    );
  });
});

describe("cb_logic_negate", () => {
  it("generates NEGATION correctly", () => {
    expect(testBlock("cb_logic_negate", null, { BOOL: "true" })).toBe("!true");
  });
});

describe("cb_logic_null", () => {
  it("generates NULL correctly", () => {
    expect(testBlock("cb_logic_null", null, null)).toBe("null");
  });
});
