const controls_for = {
  type: "cb_controls_for",
  message0: "for hver %1 fra %2 til %3 %4",
  args0: [
    { type: "field_variable", name: "VAR", variable: "i" },
    { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
    { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
    { type: "input_statement", name: "DO" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 120,
  tooltip: "Gentag et antal gange.",
  helpUrl: "",
};

const controls_forEach = {
  type: "cb_controls_forEach",
  message0: "for hver %1 i listen %2 %3",
  args0: [
    { type: "field_variable", name: "VAR", variable: "element" },
    { type: "input_value", name: "LIST", check: "Array" },
    { type: "input_statement", name: "DO" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 120,
  tooltip: "Iterer over hvert element i en liste.",
  helpUrl: "",
};

const controls_whileUntil = {
  type: "cb_controls_whileUntil",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["imens", "WHILE"],
        ["indtil", "UNTIL"],
      ],
    },
    { type: "input_value", name: "BOOL", check: "Boolean" },
    { type: "input_statement", name: "DO" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 120,
  tooltip: "Gentag imens/indtil en tilstand er sand (true).",
  helpUrl: "",
};

const controls_flow_statements = {
  type: "cb_controls_flow_statements",
  message0: "%1",
  args0: [
    {
      type: "field_dropdown",
      name: "FLOW",
      options: [
        ["break", "BREAK"],
        ["fortsæt", "CONTINUE"],
      ],
    },
  ],
  previousStatement: null,
  colour: 120,
  tooltip: "Break ud af eller fortsæt til næste iteration af en løkke.",
  helpUrl: "",
};

export const loop_data = [
  controls_for,
  controls_forEach,
  controls_whileUntil,
  controls_flow_statements,
];
