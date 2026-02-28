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
          type: "cb_logic_compare",
        },
        {
          kind: "block",
          type: "cb_logic_operation",
        },
        {
          kind: "block",
          type: "cb_logic_boolean",
        },
        {
          kind: "block",
          type: "cb_logic_negate",
        },
        {
          kind: "block",
          type: "cb_logic_null",
        },
      ],
    },
    {
      kind: "category",
      name: "Løkker",
      colour: 120,
      contents: [
        {
          kind: "block",
          type: "cb_controls_for",
        },
        {
          kind: "block",
          type: "cb_controls_forEach",
        },
        {
          kind: "block",
          type: "cb_controls_whileUntil",
        },
        {
          kind: "block",
          type: "cb_controls_flow_statements",
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
          type: "cb_math_number",
        },
        {
          kind: "block",
          type: "cb_math_arithmetic",
        },
        {
          kind: "block",
          type: "cb_math_modulo",
        },
        {
          kind: "block",
          type: "cb_math_round",
        },
        {
          kind: "block",
          type: "cb_math_single",
        },
        {
          kind: "block",
          type: "cb_math_random_int",
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
          type: "cb_text",
        },
        {
          kind: "block",
          type: "cb_text_join",
        },
        {
          kind: "block",
          type: "cb_text_length",
        },
        {
          kind: "block",
          type: "cb_text_print",
        },
        {
          kind: "block",
          type: "cb_text_isEmpty",
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
          type: "cb_lists_create_with",
        },
        {
          kind: "block",
          type: "cb_lists_length",
        },
        {
          kind: "block",
          type: "cb_lists_getIndex",
        },
        {
          kind: "block",
          type: "cb_lists_setIndex",
        },
        {
          kind: "block",
          type: "cb_lists_isEmpty",
        },
        {
          kind: "block",
          type: "cb_lists_indexOf",
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
          type: "cb_controls_if",
        },
        {
          kind: "block",
          type: "cb_controls_ifelse",
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
          type: "cb_variables_get",
        },
        {
          kind: "block",
          type: "cb_variables_set",
        },
        {
          kind: "block",
          type: "cb_variables_change",
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
          type: "cb_procedures_defnoreturn",
        },
        {
          kind: "block",
          type: "cb_procedures_defreturn",
        },
        {
          kind: "block",
          type: "cb_procedures_callnoreturn",
        },
        {
          kind: "block",
          type: "cb_procedures_callreturn",
        },
        {
          kind: "block",
          type: "cb_procedures_ifreturn",
        },
      ],
    },
  ],
};
