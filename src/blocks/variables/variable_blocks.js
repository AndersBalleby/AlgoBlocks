const variables_get = {
  type: "cb_variables_get",
  message0: "%1",
  args0: [{ type: "field_variable", name: "VAR", variable: "variabel" }],
  output: null,
  colour: 330,
  tooltip: "Få værdien af en variabel.",
  helpUrl: "",
};

const variables_set = {
  type: "cb_variables_set",
  message0: "sæt %1 til %2",
  args0: [
    { type: "field_variable", name: "VAR", variable: "variabel" },
    { type: "input_value", name: "VALUE" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 330,
  tooltip: "Indstil en variabel til en værdi.",
  helpUrl: "",
};

const variables_change = {
  type: "cb_variables_change",
  message0: "ændre %1 med %2",
  args0: [
    { type: "field_variable", name: "VAR", variable: "variabel" },
    { type: "input_value", name: "DELTA", check: "Number" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 330,
  tooltip: "Ændrer en variabel med en given mængde.",
  helpUrl: "",
};

export const variable_data = [variables_get, variables_set, variables_change];
