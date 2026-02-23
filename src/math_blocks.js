import * as Blockly from 'blockly/core';

const addition = {
  "type": "addition",
  "tooltip": "plus to tal",
  "helpUrl": "",
  "message0": "%1 + %2",
  "args0": [
    {
      "type": "input_value",
      "name": "num1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "num2",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 225,
  "inputsInline": true
};

const subtraction = {
  "type": "subtraction",
  "tooltip": "minus to tal",
  "helpUrl": "",
  "message0": "%1 - %2",
  "args0": [
    {
      "type": "input_value",
      "name": "num1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "num2",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 225,
  "inputsInline": true
};

const multiplication = {
  "type": "multiplication",
  "tooltip": "gange to tal",
  "helpUrl": "",
  "message0": "%1 * %2",
  "args0": [
    {
      "type": "input_value",
      "name": "num1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "num2",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 225,
  "inputsInline": true
};

const division = {
  "type": "division",
  "tooltip": "divider to tal",
  "helpUrl": "",
  "message0": "%1 / %2",
  "args0": [
    {
      "type": "input_value",
      "name": "num1",
      "align": "RIGHT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "num2",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 225,
  "inputsInline": true
};

export const math_data = [
  addition,
  subtraction,
  multiplication,
  division
];