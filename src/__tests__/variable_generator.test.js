import { describe, it, expect } from "vitest";
import { javascriptGenerator } from "blockly/javascript";
import "../blocks/variables/variable_generator";

function makeGetBlock(variable) {
  const block = {
    getFieldValue: () => variable,
  };
  return { block };
}

function makeSetBlock(variable, value) {
  const block = {
    getFieldValue: () => variable,
  };
  const generator = {
    valueToCode: () => value,
  };
  return { block, generator };
}

describe("cb_variables_get", () => {
  it("generates variable get correctly", () => {
    const { block } = makeGetBlock("i");
    const [code] = javascriptGenerator.forBlock["cb_variables_get"](block);
    expect(code).toBe("i");
  });
});

describe("cb_variables_set", () => {
  it("generates variable set correctly", () => {
    const { block, generator } = makeSetBlock("minVariabel", "42");
    const code = javascriptGenerator.forBlock["cb_variables_set"](
      block,
      generator,
    );
    expect(code).toBe("minVariabel = 42;\n");
  });

  it("defaults to null when value is empty", () => {
    const { block, generator } = makeSetBlock("minVariabel", "");
    const code = javascriptGenerator.forBlock["cb_variables_set"](
      block,
      generator,
    );
    expect(code).toBe("minVariabel = null;\n");
  });
});

describe("cb_variables_change", () => {
  it("generates variable change correctly", () => {
    const { block, generator } = makeSetBlock("minVariabel", "5");
    const code = javascriptGenerator.forBlock["cb_variables_change"](
      block,
      generator,
    );
    expect(code).toBe("minVariabel += 5;\n");
  });

  it("defaults to 0 when delta is empty", () => {
    const { block, generator } = makeSetBlock("minVariabel", "");
    const code = javascriptGenerator.forBlock["cb_variables_change"](
      block,
      generator,
    );
    expect(code).toBe("minVariabel += 0;\n");
  });
});
