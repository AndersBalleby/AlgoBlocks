const controls_if = {
  type: "cb_controls_if",
  message0: "hvis %1 %2",
  args0: [
    { type: "input_value", name: "IF0", check: "Boolean" },
    { type: "input_statement", name: "DO0" },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 210,
  tooltip: "Udfører en block hvis en tilstand er sand.",
  helpUrl: "",
};

const controls_ifelse = {
  type: "cb_controls_ifelse",
  message0: "hvis %1 %2 ellers %3",
  args0: [
    { type: "input_value", name: "IF0", check: "Boolean" },
    { type: "input_statement", name: "DO0" },
    { type: "input_statement", name: "ELSE" },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 210,
  tooltip: "Ufører en block eller en anden baseret på en tilstand.",
  helpUrl: "",
};

export const conditionals_data = [controls_if, controls_ifelse];
