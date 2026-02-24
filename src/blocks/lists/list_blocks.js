const lists_create_empty = {
  type: "cb_lists_create_empty",
  message0: "tom liste",
  output: "Array",
  colour: 260,
  tooltip: "Opretter en tom liste.",
  helpUrl: "",
};

const lists_create_with = {
  type: "cb_lists_create_with",
  message0: "liste med %1 %2 %3",
  args0: [
    { type: "input_value", name: "ADD0" },
    { type: "input_value", name: "ADD1" },
    { type: "input_value", name: "ADD2" },
  ],
  inputsInline: true,
  output: "Array",
  colour: 260,
  tooltip: "Opretter en liste med elementer.",
  helpUrl: "",
};

const lists_length = {
  type: "cb_lists_length",
  message0: "længde af %1",
  args0: [{ type: "input_value", name: "VALUE", check: "Array" }],
  output: "Number",
  colour: 260,
  tooltip: "Returnerer længden af en liste.",
  helpUrl: "",
};

const lists_getIndex = {
  type: "cb_lists_getIndex",
  message0: "få element ved indeks %1 fra listen %2",
  args0: [
    { type: "input_value", name: "AT", check: "Number" },
    { type: "input_value", name: "VALUE", check: "Array" },
  ],
  inputsInline: true,
  output: null,
  colour: 260,
  tooltip: "Skaf et element ved et givent indeks fra en liste.",
  helpUrl: "",
};

const lists_setIndex = {
  type: "cb_lists_setIndex",
  message0: "sæt værdi ved indeks %1 fra %2 til %3",
  args0: [
    { type: "input_value", name: "AT", check: "Number" },
    { type: "input_value", name: "LIST", check: "Array" },
    { type: "input_value", name: "TO" },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 260,
  tooltip: "Sætter værdien ved et givent indeks fra en liste.",
  helpUrl: "",
};

const lists_isEmpty = {
  type: "cb_lists_isEmpty",
  message0: "%1 er tom",
  args0: [{ type: "input_value", name: "VALUE", check: "Array" }],
  output: "Boolean",
  colour: 260,
  tooltip: "Returnerer true hvis listen er tom.",
  helpUrl: "",
};

const lists_indexOf = {
  type: "cb_lists_indexOf",
  message0: "find %1 i listen %2",
  args0: [
    { type: "input_value", name: "FIND" },
    { type: "input_value", name: "VALUE", check: "Array" },
  ],
  inputsInline: true,
  output: "Number",
  colour: 260,
  tooltip:
    "Returnerer indekset af et element i en liste. Returnerer -1 hvis elementet ikke kan findes.",
  helpUrl: "",
};

export const list_data = [
  lists_create_empty,
  lists_create_with,
  lists_length,
  lists_getIndex,
  lists_setIndex,
  lists_isEmpty,
  lists_indexOf,
];
