import { describe, expect, it } from "vitest";
import { testBlock } from "./test_utils";
import "../blocks/text/text_generator";

describe("cb_text", () => {
  it("generates TEXT correctly", () => {
    expect(testBlock("cb_text", { TEXT: "Hej" }, null)).toBe('"Hej"');
  });
});

describe("cb_text_join", () => {
  it("generates CONCAT correctly", () => {
    expect(testBlock("cb_text_join", null, { A: "Hejmed", B: "Dig" })).toBe(
      "String(Hejmed).concat(String(Dig))",
    );
  });
});

describe("cb_text_length", () => {
  it("generates LENGTH correctly", () => {
    expect(testBlock("cb_text_length", null, { VALUE: "Hej" })).toBe(
      "Hej.length",
    );
  });
});

describe("cb_text_print", () => {
  it("generates CONSOLE.LOG correctly", () => {
    expect(testBlock("cb_text_print", null, { TEXT: "Hej" })).toBe(
      "console.log(Hej);\n",
    );
  });
});

describe("cb_text_isEmpty", () => {
  it("generates ISEMPTY correctly", () => {
    expect(testBlock("cb_text_isEmpty", null, { VALUE: "Hej" })).toBe(
      "Hej.length === 0",
    );
  });
});
