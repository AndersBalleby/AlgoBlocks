import {
  addition,
  division,
  multiplication,
  subtraction,
} from "./math_generator";

export const forBlock = Object.create(null);

forBlock["addition"] = addition;
forBlock["subtraction"] = subtraction;
forBlock["multiplication"] = multiplication;
forBlock["division"] = division;
