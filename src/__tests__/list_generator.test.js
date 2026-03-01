import { describe, it, expect } from "vitest";
import { javascriptGenerator } from "blockly/javascript";
import "../blocks/lists/list_generator";

function makeListCreateBlock(a, b, c) {
  const block = { getFieldValue: () => null };
  const generator = {
    valueToCode: (_, input) => {
      if (input === "ADD0") return a;
      if (input === "ADD1") return b;
      if (input === "ADD2") return c;
    },
  };
  return { block, generator };
}

function makeSingleInputBlock(value) {
  const block = { getFieldValue: () => null };
  const generator = {
    valueToCode: () => value,
  };
  return { block, generator };
}

function makeDoubleInputBlock(first, second) {
  const block = { getFieldValue: () => null };
  const generator = {
    valueToCode: (_, input) =>
      input === "AT" || input === "FIND" ? first : second,
  };
  return { block, generator };
}

function makeSetIndexBlock(at, list, to) {
  const block = { getFieldValue: () => null };
  const generator = {
    valueToCode: (_, input) => {
      if (input === "AT") return at;
      if (input === "LIST") return list;
      if (input === "TO") return to;
    },
  };
  return { block, generator };
}

describe("cb_lists_create_with", () => {
  it("generates LIST CREATION correctly", () => {
    const { block, generator } = makeListCreateBlock("1", "2", "3");
    const [code] = javascriptGenerator.forBlock["cb_lists_create_with"](
      block,
      generator,
    );
    expect(code).toBe("[1, 2, 3]");
  });

  it("defaults to null for empty inputs", () => {
    const { block, generator } = makeListCreateBlock("", "", "");
    const [code] = javascriptGenerator.forBlock["cb_lists_create_with"](
      block,
      generator,
    );
    expect(code).toBe("[null, null, null]");
  });
});

describe("cb_lists_length", () => {
  it("generates LENGTH correctly", () => {
    const { block, generator } = makeSingleInputBlock("myList");
    const [code] = javascriptGenerator.forBlock["cb_lists_length"](
      block,
      generator,
    );
    expect(code).toBe("myList.length");
  });

  it("defaults to empty list when input is empty", () => {
    const { block, generator } = makeSingleInputBlock("");
    const [code] = javascriptGenerator.forBlock["cb_lists_length"](
      block,
      generator,
    );
    expect(code).toBe("[].length");
  });
});

describe("cb_lists_getIndex", () => {
  it("generates INDEX ACCESS correctly", () => {
    const { block, generator } = makeDoubleInputBlock("0", "myList");
    const [code] = javascriptGenerator.forBlock["cb_lists_getIndex"](
      block,
      generator,
    );
    expect(code).toBe("myList[0]");
  });
});

describe("cb_lists_setIndex", () => {
  it("generates INDEX ASSIGNMENT correctly", () => {
    const { block, generator } = makeSetIndexBlock("0", "myList", "42");
    const code = javascriptGenerator.forBlock["cb_lists_setIndex"](
      block,
      generator,
    );
    expect(code).toBe("myList[0] = 42;\n");
  });

  it("defaults correctly when inputs are empty", () => {
    const { block, generator } = makeSetIndexBlock("", "", "");
    const code = javascriptGenerator.forBlock["cb_lists_setIndex"](
      block,
      generator,
    );
    expect(code).toBe("[][0] = null;\n");
  });
});

describe("cb_lists_isEmpty", () => {
  it("generates isEmpty correctly", () => {
    const { block, generator } = makeSingleInputBlock("myList");
    const [code] = javascriptGenerator.forBlock["cb_lists_isEmpty"](
      block,
      generator,
    );
    expect(code).toBe("myList.length === 0");
  });
});

describe("cb_lists_indexOf", () => {
  it("generates indexOf correctly", () => {
    const { block, generator } = makeDoubleInputBlock("42", "myList");
    const [code] = javascriptGenerator.forBlock["cb_lists_indexOf"](
      block,
      generator,
    );
    expect(code).toBe("myList.indexOf(42)");
  });

  it("defaults to null when find input is empty", () => {
    const { block, generator } = makeDoubleInputBlock("", "myList");
    const [code] = javascriptGenerator.forBlock["cb_lists_indexOf"](
      block,
      generator,
    );
    expect(code).toBe("myList.indexOf(null)");
  });
});
