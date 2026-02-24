const logic_compare = {
  type: "cb_logic_compare",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "A",
    },
    {
      type: "field_dropdown",
      name: "OP",
      options: [
        ["==", "EQ"],
        ["≠", "NEQ"],
        ["<", "LT"],
        ["≤", "LTE"],
        [">", "GT"],
        ["≥", "GTE"],
      ],
    },
    {
      type: "input_value",
      name: "B",
    },
  ],
  inputsInline: true,
  output: "Boolean",
  colour: 210,
  tooltip: "Sammenligner to værdier.",
  helpUrl: "",
};

const logic_operation = {
  type: "cb_logic_operation",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "A",
      check: "Boolean",
    },
    {
      type: "field_dropdown",
      name: "OP",
      options: [
        ["og", "AND"],
        ["eller", "OR"],
      ],
    },
    {
      type: "input_value",
      name: "B",
      check: "Boolean",
    },
  ],
  inputsInline: true,
  output: "Boolean",
  colour: 210,
  tooltip: "Returnerer true hvis begge/en tilstand er sand.",
  helpUrl: "",
};

const logic_boolean = {
  type: "cb_logic_boolean",
  message0: "%1",
  args0: [
    {
      type: "field_dropdown",
      name: "BOOL",
      options: [
        ["true", "TRUE"],
        ["false", "FALSE"],
      ],
    },
  ],
  output: "Boolean",
  colour: 210,
  tooltip: "Returnerer enten true eller false.",
  helpUrl: "",
};

const logic_negate = {
  type: "cb_logic_negate",
  message0: "ikke %1",
  args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
  output: "Boolean",
  colour: 210,
  tooltip: "Returnerer det modsatte af true/false.",
  helpUrl: "",
};

const logic_null = {
  type: "cb_logic_null",
  message0: "null",
  output: null,
  colour: 210,
  tooltip: "Returnerer null (ingenting).",
  helpUrl: "",
};

export const logic_data = [
  logic_compare,
  logic_operation,
  logic_boolean,
  logic_negate,
  logic_null,
];
