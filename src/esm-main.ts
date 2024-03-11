import fechaActual, { NOMBRE, greet } from "./esm-base";

console.log(greet(NOMBRE));
console.log(fechaActual);

//IIFE (Immediately Invoked Function Expression)
(async () => {
  const { generateRandomNumber } = await import("./esm-base");
  const value = generateRandomNumber();

  if (value > 5) {
    console.log("High");
  } else if (value > 3) {
    console.log("Medium");
  } else {
    console.log("Low");
  }
})();
