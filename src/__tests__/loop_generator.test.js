import { describe, it, expect } from "vitest";
import { javascriptGenerator } from "blockly/javascript";
import "../blocks/loops/loop_generator";

function makeForBlock(variable, from, to, body) {
  const block = {
    getFieldValue: () => variable,
  };
  const generator = {
    valueToCode: (_, input) => (input === "FROM" ? from : to),
    statementToCode: () => body,
  };
  return { block, generator };
}

function makeForEachBlock(variable, list, body) {
  const block = {
    getFieldValue: () => variable,
  };
  const generator = {
    valueToCode: () => list,
    statementToCode: () => body,
  };
  return { block, generator };
}

function makeWhileBlock(mode, condition, body) {
  const block = {
    getFieldValue: () => mode,
  };
  const generator = {
    valueToCode: () => condition,
    statementToCode: () => body,
  };
  return { block, generator };
}

function makeFlowBlock(flow) {
  const block = {
    getFieldValue: () => flow,
  };
  return { block };
}

describe("cb_controls_for", () => {
  it("generates for loop correctly", () => {
    const { block, generator } = makeForBlock(
      "i",
      "0",
      "10",
      "  doSomething();\n",
    );
    const code = javascriptGenerator.forBlock["cb_controls_for"](
      block,
      generator,
    );
    expect(code).toBe("for (let i = 0; i <= 10; i++) {\n  doSomething();\n}\n");
  });

  it("defaults to 0 when from and to are empty", () => {
    const { block, generator } = makeForBlock("i", "", "", "");
    const code = javascriptGenerator.forBlock["cb_controls_for"](
      block,
      generator,
    );
    expect(code).toBe("for (let i = 0; i <= 0; i++) {\n}\n");
  });
});

describe("cb_controls_forEach", () => {
  it("generates forEach loop correctly", () => {
    const { block, generator } = makeForEachBlock(
      "element",
      "myList",
      "  doSomething();\n",
    );
    const code = javascriptGenerator.forBlock["cb_controls_forEach"](
      block,
      generator,
    );
    expect(code).toBe("for (const element of myList) {\n  doSomething();\n}\n");
  });

  it("defaults to empty list when list is empty", () => {
    const { block, generator } = makeForEachBlock("element", "", "");
    const code = javascriptGenerator.forBlock["cb_controls_forEach"](
      block,
      generator,
    );
    expect(code).toBe("for (const element of []) {\n}\n");
  });
});

describe("cb_controls_whileUntil", () => {
  it("generates while loop correctly", () => {
    const { block, generator } = makeWhileBlock(
      "WHILE",
      "x > 0",
      "  doSomething();\n",
    );
    const code = javascriptGenerator.forBlock["cb_controls_whileUntil"](
      block,
      generator,
    );
    expect(code).toBe("while (x > 0) {\n  doSomething();\n}\n");
  });

  it("generates until loop by negating condition", () => {
    const { block, generator } = makeWhileBlock(
      "UNTIL",
      "x > 0",
      "  doSomething();\n",
    );
    const code = javascriptGenerator.forBlock["cb_controls_whileUntil"](
      block,
      generator,
    );
    expect(code).toBe("while (!(x > 0)) {\n  doSomething();\n}\n");
  });

  it("defaults to false when condition is empty", () => {
    const { block, generator } = makeWhileBlock("WHILE", "", "");
    const code = javascriptGenerator.forBlock["cb_controls_whileUntil"](
      block,
      generator,
    );
    expect(code).toBe("while (false) {\n}\n");
  });
});

describe("cb_controls_flow_statements", () => {
  it("generates break correctly", () => {
    const { block } = makeFlowBlock("BREAK");
    const code =
      javascriptGenerator.forBlock["cb_controls_flow_statements"](block);
    expect(code).toBe("break;\n");
  });

  it("generates continue correctly", () => {
    const { block } = makeFlowBlock("CONTINUE");
    const code =
      javascriptGenerator.forBlock["cb_controls_flow_statements"](block);
    expect(code).toBe("continue;\n");
  });
});
