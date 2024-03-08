const NOMBRE = "Pedro";

/**
 * A function that greets the input name with "Hola".
 *
 * @param {string} name - the name to be greeted
 * @return {string} the greeting message
 */
function greet(name: string) {
  return `Hola ${name}`;
}

const currentDate = new Date();

module.exports = {
  NOMBRE,
  greet,
  currentDate,
};
