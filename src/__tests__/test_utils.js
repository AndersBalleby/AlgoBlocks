import { javascriptGenerator } from "blockly/javascript";

/**
 * Opretter en "mock block" med field values og en mock generator til input mapping
 *
 * @param {Object} fields  - ex { OP: "ADD" }
 * @param {Object} inputs  - ex { A: "3", B: "4" }
 * @returns
 */
export function makeBlock(fields = {}, inputs = {}) {
  const block = {
    getFieldValue: (field) => fields[field] ?? null,
  };

  const generator = {
    valueToCode: (_, input) => inputs[input] ?? "",
  };

  return { block, generator };
}

/**
 * Kører en forBlock generator og returnerer den genererede kode
 *
 * @param {string} blockType  - ex "cb_math_arithmetic"
 * @param {Object} block
 * @param {Object} generator
 * @returns
 */
export function generateCode(blockType, block, generator) {
  const fn = javascriptGenerator.forBlock[blockType];
  if (!fn)
    throw new Error(`Ingen generator registreret for block: ${blockType}`);
  const result = fn(block, generator);
  return Array.isArray(result) ? result[0] : result;
}

/**
 * Kombinerer makeBlock og generateCode i et enkelt call
 *
 * @param {string} blockType
 * @param {Object} fields
 * @param {Object} inputs
 * @returns
 */
export function testBlock(blockType, fields, inputs) {
  const { block, generator } = makeBlock(fields, inputs);
  return generateCode(blockType, block, generator);
}
