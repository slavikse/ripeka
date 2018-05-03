/**
 * Клонирует в глубину с ссылочной отвязкой.
 * @param data {Object|Array|Array<Object>} клонируемый.
 * @returns {Object|Array|Array<Object>} клон.
 */
export default function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
}
