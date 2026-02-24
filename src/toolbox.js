export const linearSearchToolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logik",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_null",
        },
      ],
    },
    {
      kind: "category",
      name: "Løkke",
      colour: 120,
      contents: [
        {
          kind: "block",
          type: "controls_for",
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Matematik",
      colour: 230,
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "math_arithmetic",
        },
        {
          kind: "block",
          type: "math_modulo",
        },
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_single",
        },
        {
          kind: "block",
          type: "math_random_int",
        },
      ],
    },
    {
      kind: "category",
      name: "Tekst",
      colour: 160,
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_length",
        },
        {
          kind: "block",
          type: "text_print",
        },
        {
          kind: "block",
          type: "text_isEmpty",
        },
      ],
    },
    {
      kind: "category",
      name: "Lister",
      colour: 260,
      contents: [
        {
          kind: "block",
          type: "lists_create_empty",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_getIndex",
        },
        {
          kind: "block",
          type: "lists_setIndex",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
        },
      ],
    },
    {
      kind: "category",
      name: "Betingelser",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "controls_ifelse",
        },
      ],
    },
    {
      kind: "category",
      name: "Variabler",
      colour: 330,
      contents: [
        {
          kind: "block",
          type: "variables_get",
        },
        {
          kind: "block",
          type: "variables_set",
        },
        {
          kind: "block",
          type: "variables_change",
        },
      ],
    },
    {
      kind: "category",
      name: "Funktioner",
      colour: 290,
      contents: [
        {
          kind: "block",
          type: "procedures_defnoreturn",
        },
        {
          kind: "block",
          type: "procedures_defreturn",
        },
        {
          kind: "block",
          type: "procedures_callnoreturn",
        },
        {
          kind: "block",
          type: "procedures_callreturn",
        },
        {
          kind: "block",
          type: "procedures_ifreturn",
        },
      ],
    },
  ],
};
