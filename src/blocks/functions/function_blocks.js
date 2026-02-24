const procedures_defnoreturn = {
  type: "procedures_defnoreturn",
  message0: "funktion %1 %2",
  args0: [
    { type: "field_input", name: "NAME", text: "minFunktion" },
    { type: "input_statement", name: "STACK" },
  ],
  colour: 290,
  tooltip: "Definerer en funktion uden returværdi.",
  helpUrl: "",
};

const procedures_defreturn = {
  type: "procedures_defreturn",
  message0: "funktion %1 %2 returner %3",
  args0: [
    { type: "field_input", name: "NAME", text: "minFunktion" },
    { type: "input_statement", name: "STACK" },
    { type: "input_value", name: "RETURN" },
  ],
  colour: 290,
  tooltip: "Definerer en funktion med en returværdi.",
  helpUrl: "",
};

const procedures_callnoreturn = {
  type: "procedures_callnoreturn",
  message0: "kald %1",
  args0: [{ type: "field_input", name: "NAME", text: "minFunktion" }],
  previousStatement: null,
  nextStatement: null,
  colour: 290,
  tooltip: "Kalder en funktion.",
  helpUrl: "",
};

const procedures_callreturn = {
  type: "procedures_callreturn",
  message0: "kald %1",
  args0: [{ type: "field_input", name: "NAME", text: "minFunktion" }],
  output: null,
  colour: 290,
  tooltip: "Kalder en funktion og returnerer dens returværdi.",
  helpUrl: "",
};

const procedures_ifreturn = {
  type: "procedures_ifreturn",
  message0: "hvis %1 returner %2",
  args0: [
    { type: "input_value", name: "CONDITION", check: "Boolean" },
    { type: "input_value", name: "VALUE" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 290,
  tooltip: "Returner en værdi hvis tilstanden er true.",
  helpUrl: "",
};

export const function_data = [
  procedures_defnoreturn,
  procedures_defreturn,
  procedures_callnoreturn,
  procedures_callreturn,
  procedures_ifreturn,
];
