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
  it("handles modulo operation correctly", () => {
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
