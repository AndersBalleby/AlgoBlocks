const math_number = {
  type: "cb_math_number",
  message0: "%1",
  args0: [{ type: "field_number", name: "NUM", value: 0 }],
  output: "Number",
  colour: 230,
  tooltip: "Et tal.",
  helpUrl: "",
};

const math_arithmetic = {
  type: "cb_math_arithmetic",
  message0: "%1 %2 %3",
  args0: [
    { type: "input_value", name: "A", check: "Number" },
    {
      type: "field_dropdown",
      name: "OP",
      options: [
        ["+", "ADD"],
        ["-", "MINUS"],
        ["×", "MULTIPLY"],
        ["÷", "DIVIDE"],
        ["^", "POWER"],
      ],
    },
    { type: "input_value", name: "B", check: "Number" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 230,
  tooltip: "Basis aritmetik operatorer.",
  helpUrl: "",
};

const math_modulo = {
  type: "cb_math_modulo",
  message0: "%1 mod %2",
  args0: [
    { type: "input_value", name: "DIVIDEND", check: "Number" },
    { type: "input_value", name: "DIVISOR", check: "Number" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 230,
  tooltip: "Returnerer resterne fra en division.",
  helpUrl: "",
};

const math_round = {
  type: "cb_math_round",
  message0: "%1 %2",
  args0: [
    {
      type: "field_dropdown",
      name: "OP",
      options: [
        ["afrund", "ROUND"],
        ["afrund op", "ROUNDUP"],
        ["afrund ned", "ROUNDDOWN"],
      ],
    },
    { type: "input_value", name: "NUM", check: "Number" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 230,
  tooltip: "Afrund et tal.",
  helpUrl: "",
};

const math_single = {
  type: "cb_math_single",
  message0: "%1 %2",
  args0: [
    {
      type: "field_dropdown",
      name: "OP",
      options: [
        ["√", "ROOT"],
        ["abs", "ABS"],
      ],
    },
    { type: "input_value", name: "NUM", check: "Number" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 230,
  tooltip: "Diverse matematik operationer.",
  helpUrl: "",
};

const math_random_int = {
  type: "cb_math_random_int",
  message0: "tilfældigt heltal fra %1 til %2",
  args0: [
    { type: "input_value", name: "FROM", check: "Number" },
    { type: "input_value", name: "TO", check: "Number" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 230,
  tooltip: "Returnerer et tilfældigt heltal mellem to tal.",
  helpUrl: "",
};

export const math_data = [
  math_number,
  math_arithmetic,
  math_modulo,
  math_round,
  math_single,
  math_random_int,
];
