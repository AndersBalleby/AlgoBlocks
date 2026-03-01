const text = {
  type: "cb_text",
  message0: "%1",
  args0: [{ type: "field_input", name: "TEXT", text: "" }],
  output: "String",
  colour: 160,
  tooltip: "En tekststreng.",
  helpUrl: "",
};

const text_join = {
  type: "cb_text_join",
  message0: "sammenflet %1 %2",
  args0: [
    { type: "input_value", name: "A", check: "String" },
    { type: "input_value", name: "B", check: "String" },
  ],
  inputsInline: true,
  output: "String",
  colour: 160,
  tooltip: "Sammenflet to værdier til en tekststreng.",
  helpUrl: "",
};

const text_length = {
  type: "cb_text_length",
  message0: "længde af %1",
  args0: [{ type: "input_value", name: "VALUE" }],
  output: "Number",
  colour: 160,
  tooltip: "Returnerer længden af en tekststreng eller liste.",
  helpUrl: "",
};

const text_print = {
  type: "cb_text_print",
  message0: "skriv %1",
  args0: [{ type: "input_value", name: "TEXT" }],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: "Skriv en værdi til output.",
  helpUrl: "",
};

const text_isEmpty = {
  type: "cb_text_isEmpty",
  message0: "%1 er tom",
  args0: [{ type: "input_value", name: "VALUE" }],
  output: "Boolean",
  colour: 160,
  tooltip: "Returnerer true hvis teksten er tom.",
  helpUrl: "",
};

export const text_data = [
  text,
  text_join,
  text_length,
  text_print,
  text_isEmpty,
];
