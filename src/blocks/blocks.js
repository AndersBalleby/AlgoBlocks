import * as Blockly from "blockly/core";
import { logic_data } from "./logic/logic_blocks";
import { loop_data } from "./loops/loop_blocks";
import { math_data } from "./math/math_blocks";
import { text_data } from "./text/text_blocks";
import { list_data } from "./lists/list_blocks";
import { conditionals_data } from "./conditionals/conditional_blocks";
import { variable_data } from "./variables/variable_blocks";
import { function_data } from "./functions/function_blocks";

const blockData = [
  ...logic_data,
  ...loop_data,
  ...math_data,
  ...text_data,
  ...list_data,
  ...conditionals_data,
  ...variable_data,
  ...function_data,
];

const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);
Blockly.common.defineBlocks(blocks);
