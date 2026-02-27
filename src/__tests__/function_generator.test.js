import { javascriptGenerator } from "blockly/javascript";
import { describe, expect, it } from "vitest";
import "../blocks/functions/function_generators";

function makeDefBlock(name, body) {
  const block = {
    getFieldValue: () => name,
  };

  const generator = {
    statementToCode: () => body,
    valueToCode: () => "undefined",
  };

  return { block, generator };
}

function makeDefReturnBlock(name, body, returnValue) {
  const block = {
    getFieldValue: () => name,
  };

  const generator = {
    statementToCode: () => body,
    valueToCode: () => returnValue,
  };

  return { block, generator };
}

function makeCallBlock(name) {
  const block = {
    getFieldValue: () => name,
  };

  return { block };
}

function makeIfReturnBlock(condition, value) {
  const block = {
    getFieldValue: () => null,
  };

  const generator = {
    valueToCode: (_, input) => (input === "CONDITION" ? condition : value),
  };

  return { block, generator };
}

describe("cb_procedures_defnoreturn", () => {
  it("generates FUNCTION DEFINITION correctly", () => {
    const { block, generator } = makeDefBlock(
      "minFunktion",
      "  doSomething();\n",
    );
    const code = javascriptGenerator.forBlock["cb_procedures_defnoreturn"](
      block,
      generator,
    );
    expect(code).toBe("function minFunktion() {\n  doSomething();\n}\n");
  });

  it("defaults to minFunktion when name is empty", () => {
    const { block, generator } = makeDefBlock("", "  doSomething();\n");
    const code = javascriptGenerator.forBlock["cb_procedures_defnoreturn"](
      block,
      generator,
    );
    expect(code).toBe("function minFunktion() {\n  doSomething();\n}\n");
  });
});

describe("cb_procedures_defreturn", () => {
  it("generates FUNCTION DEFINITION WITH RETURN correctly", () => {
    const { block, generator } = makeDefReturnBlock(
      "minFunktion",
      "  doSomething();\n",
      "42",
    );
    const code = javascriptGenerator.forBlock["cb_procedures_defreturn"](
      block,
      generator,
    );
    expect(code).toBe(
      "function minFunktion() {\n  doSomething();\n  return 42;\n}\n",
    );
  });

  it("defaults to undefined when return value is empty", () => {
    const { block, generator } = makeDefReturnBlock("minFunktion", "", "");
    const code = javascriptGenerator.forBlock["cb_procedures_defreturn"](
      block,
      generator,
    );
    expect(code).toBe("function minFunktion() {\n  return undefined;\n}\n");
  });
});

describe("cb_procedures_callnoreturn", () => {
  it("generates FUNCTION CALL correctly", () => {
    const { block } = makeCallBlock("minFunktion");
    const code =
      javascriptGenerator.forBlock["cb_procedures_callnoreturn"](block);
    expect(code).toBe("minFunktion();\n");
  });
});

describe("cb_procedures_callreturn", () => {
  it("generates FUNCTION CALL EXPRESSION correctly", () => {
    const { block } = makeCallBlock("minFunktion");
    const [code] =
      javascriptGenerator.forBlock["cb_procedures_callreturn"](block);
    expect(code).toBe("minFunktion()");
  });
});

describe("cb_procedures_ifreturn", () => {
  it("generates IF RETURN correctly", () => {
    const { block, generator } = makeIfReturnBlock("x > 0", "42");
    const code = javascriptGenerator.forBlock["cb_procedures_ifreturn"](
      block,
      generator,
    );
    expect(code).toBe("if (x > 0) { return 42; }\n");
  });

  it("defaults to false and undefined when inputs are empty", () => {
    const { block, generator } = makeIfReturnBlock("", "");
    const code = javascriptGenerator.forBlock["cb_procedures_ifreturn"](
      block,
      generator,
    );
    expect(code).toBe("if (false) { return undefined; }\n");
  });
});
