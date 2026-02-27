import { describe, it, expect, vi } from "vitest";
import { javascriptGenerator } from "blockly/javascript";
import "../blocks/math/math_generator";

function makeArithmeticBlock(op, a, b) {
  const block = {
    getFieldValue: (field) => (field === "OP" ? op : null),
  };
  const generator = {
    valueToCode: (_, input) => (input === "A" ? a : b),
  };
  return { block, generator };
}

describe("cb_math_arithmetic", () => {
  it.each([
    ["ADD", "3", "4", "3 + 4"],
    ["MINUS", "3", "4", "3 - 4"],
    ["MULTIPLY", "3", "4", "3 * 4"],
    ["DIVIDE", "3", "4", "3 / 4"],
    ["DIVIDE", "3", "0", "/* division med nul er ikke tilladt */"],
    ["POWER", "3", "4", "3 ** 4"],
  ])("generates %s correctly", (op, a, b, expected) => {
    const { block, generator } = makeArithmeticBlock(op, a, b);
    const [code] = javascriptGenerator.forBlock["cb_math_arithmetic"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_math_modulo", () => {
  it("generates MODULO operation correctly", () => {
    const block = {};
    const generator = {
      valueToCode: (_, input) => (input === "DIVIDEND" ? "3" : "4"),
    };

    const [code] = javascriptGenerator.forBlock["cb_math_modulo"](
      block,
      generator,
    );
    expect(code).toBe("3 % 4");
  });
});

describe("cb_math_round", () => {
  it.each([
    ["ROUND", "2.5", "Math.round(2.5)"],
    ["ROUNDUP", "2.5", "Math.ceil(2.5)"],
    ["ROUNDDOWN", "2.5", "Math.floor(2.5)"],
  ])("generates %s correctly", (operator, num, expected) => {
    const block = {
      getFieldValue: (field) => (field === "OP" ? operator : null),
    };

    const generator = {
      valueToCode: (_, input) => (input === "NUM" ? num : null),
    };

    const [code] = javascriptGenerator.forBlock["cb_math_round"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_math_single", () => {
  it.each([
    ["ROOT", "2.5", "Math.sqrt(2.5)"],
    ["ABS", "2.5", "Math.abs(2.5)"],
  ])("generates %s correctly", (operator, num, expected) => {
    const block = {
      getFieldValue: (field) => (field === "OP" ? operator : null),
    };

    const generator = {
      valueToCode: (_, input) => (input === "NUM" ? num : null),
    };

    const [code] = javascriptGenerator.forBlock["cb_math_single"](
      block,
      generator,
    );
    expect(code).toBe(expected);
  });
});

describe("cb_math_random_int", () => {
  it("generates RANDOM correctly", () => {
    const block = {};
    const generator = {
      valueToCode: (_, input) => (input === "FROM" ? "1" : "10"),
    };

    const [code] = javascriptGenerator.forBlock["cb_math_random_int"](
      block,
      generator,
    );
    expect(code).toBe("Math.floor(Math.random() * (10 - 1 + 1)) + 1");
  });
});
