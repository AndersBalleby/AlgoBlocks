import { describe, it, expect } from "vitest";
import "../blocks/math/math_generator";
import { testBlock } from "./test_utils";

describe("cb_math_arithmetic", () => {
  it.each([
    ["ADD", "3", "4", "3 + 4"],
    ["MINUS", "3", "4", "3 - 4"],
    ["MULTIPLY", "3", "4", "3 * 4"],
    ["DIVIDE", "3", "4", "3 / 4"],
    ["DIVIDE", "3", "0", "/* division med nul er ikke tilladt */"],
    ["POWER", "3", "4", "3 ** 4"],
  ])("generates %s correctly", (op, a, b, expected) => {
    expect(testBlock("cb_math_arithmetic", { OP: op }, { A: a, B: b })).toBe(
      expected,
    );
  });
});

describe("cb_math_modulo", () => {
  it("generates MODULO operation correctly", () => {
    expect(testBlock("cb_math_modulo", null, { DIVIDEND: 3, DIVISOR: 4 })).toBe(
      "3 % 4",
    );
  });
});

describe("cb_math_round", () => {
  it.each([
    ["ROUND", "2.5", "Math.round(2.5)"],
    ["ROUNDUP", "2.5", "Math.ceil(2.5)"],
    ["ROUNDDOWN", "2.5", "Math.floor(2.5)"],
  ])("generates %s correctly", (operator, num, expected) => {
    expect(testBlock("cb_math_round", { OP: operator }, { NUM: num })).toBe(
      expected,
    );
  });
});

describe("cb_math_single", () => {
  it.each([
    ["ROOT", "2.5", "Math.sqrt(2.5)"],
    ["ABS", "2.5", "Math.abs(2.5)"],
  ])("generates %s correctly", (operator, num, expected) => {
    expect(testBlock("cb_math_single", { OP: operator }, { NUM: 2.5 })).toBe(
      expected,
    );
  });
});

describe("cb_math_random_int", () => {
  it("generates RANDOM correctly", () => {
    expect(testBlock("cb_math_random_int", null, { FROM: 1, TO: 10 })).toBe(
      "Math.floor(Math.random() * (10 - 1 + 1)) + 1",
    );
  });
});
