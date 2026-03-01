const procedures_defnoreturn = {
  type: "cb_procedures_defnoreturn",
  message0: "funktion %1(liste, værdi) %2",
  args0: [
    { type: "field_input", name: "NAME", text: "lineærSøgning" },
    { type: "input_statement", name: "STACK" },
  ],
  colour: 290,
  tooltip: "Definerer en funktion uden returværdi.",
  helpUrl: "",
};

const procedures_defreturn = {
  type: "cb_procedures_defreturn",
  message0: "funktion %1(liste, værdi) %2 returner %3",
  args0: [
    { type: "field_input", name: "NAME", text: "lineærSøgning" },
    { type: "input_statement", name: "STACK" },
    { type: "input_value", name: "RETURN" },
  ],
  colour: 290,
  tooltip: "Definerer en funktion med en returværdi.",
  helpUrl: "",
};
/*
const procedures_callnoreturn = {
  type: "cb_procedures_callnoreturn",
  message0: "kald %1 med %2 og %3",
  args0: [
    { type: "field_input", name: "NAME", text: "minFunktion" },
    { type: "input_value", name: "ARG0" },
    { type: "input_value", name: "ARG1" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 290,
  tooltip: "Kalder en funktion.",
  helpUrl: "",
};

const procedures_callreturn = {
  type: "cb_procedures_callreturn",
  message0: "kald %1 med %2 og %3",
  args0: [
    { type: "field_input", name: "NAME", text: "minFunktion" },
    { type: "input_value", name: "ARG0" },
    { type: "input_value", name: "ARG1" },
  ],
  inputsInline: true,
  output: null,
  colour: 290,
  tooltip: "Kalder en funktion og returnerer dens returværdi.",
  helpUrl: "",
};
*/
const procedures_ifreturn = {
  type: "cb_procedures_ifreturn",
  message0: "returner %1",
  args0: [{ type: "input_value", name: "VALUE" }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 290,
  tooltip: "Returner en værdi fra en funktion.",
  helpUrl: "",
};

export const function_data = [
  procedures_defnoreturn,
  procedures_defreturn,
  procedures_ifreturn,
];
