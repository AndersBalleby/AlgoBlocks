import * as Blockly from "blockly/core";
import { math_data } from "./math_blocks";
const blockData = [
  ...math_data,
];

export const blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray(blockData);
