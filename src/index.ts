const personas: number = 270;
let arreglo: number[] = new Array(personas);
const menores: number = 18;
const mayores: number = 40;
let menor21: number = 0;
let mayor21: number = 0;

function personasRandom(): number {
  return Math.floor(Math.random() * (mayores - menores) + menores);
}

for (let indice = 0; indice < personas; indice++) {
  arreglo[indice] = personasRandom();
}

for (let indice = 0; indice < personas; indice++) {
  if (arreglo[indice] <= 21) {
    menor21++;
  } else {
    mayor21++;
  }
}
console.log(
  "la cantidad de personas menores de 21 años es: " + menor21,
  "la cantidad de personas mayores de 21 años es: " + mayor21,
  "la cantidad de personas que ingresaron al boliche son: " + personas
);
