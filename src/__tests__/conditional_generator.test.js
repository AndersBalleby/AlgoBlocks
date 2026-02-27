import { describe, expect, it } from "vitest";
import { testBlock } from "./test_utils";
import { javascriptGenerator } from "blockly/javascript";
import "../blocks/conditionals/conditional_generator";

function makeIfBlock(condition, body) {
  const block = {
    getFieldValue: () => null,
  };

  const generator = {
    valueToCode: (_, input) => condition,
    statementToCode: (_, input) => body,
  };

  return { block, generator };
}

function makeIfElseBlock(condition, body, elseBody) {
  const block = {
    getFieldValue: () => null,
  };

  const generator = {
    valueToCode: (_, input) => condition,
    statementToCode: (_, input) => (input === "DO0" ? body : elseBody),
  };

  return { block, generator };
}

describe("cb_controls_if", () => {
  it("generates IF correctly", () => {
    const { block, generator } = makeIfBlock("x > 0", "  doSomething();\n");
    const code = javascriptGenerator.forBlock["cb_controls_if"](
      block,
      generator,
    );
    expect(code).toBe("if (x > 0) {\n  doSomething();\n}\n");
  });

  it("defaults to false when condition is empty", () => {
    const { block, generator } = makeIfBlock("", "  doSomething();\n");
    const code = javascriptGenerator.forBlock["cb_controls_if"](
      block,
      generator,
    );
    expect(code).toBe("if (false) {\n  doSomething();\n}\n");
  });
});

describe("cb_controls_ifelse", () => {
  it("generates if/else block correctly", () => {
    const { block, generator } = makeIfElseBlock(
      "x > 0",
      "  doA();\n",
      "  doB();\n",
    );
    const code = javascriptGenerator.forBlock["cb_controls_ifelse"](
      block,
      generator,
    );
    expect(code).toBe("if (x > 0) {\n  doA();\n} else {\n  doB();\n}\n");
  });
});
