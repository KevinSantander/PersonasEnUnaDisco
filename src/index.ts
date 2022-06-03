const cantidadPersonas: number = 270;
let personas: number[] = new Array(cantidadPersonas);
const edadMinima: number = 18;
const edadMaxima: number = 40;
let menores21: number = 0;
let mayores21: number = 0;

function edadRandom(): number {
  return Math.floor(Math.random() * edadMaxima - edadMinima + edadMinima);
}

for (let indice = 0; indice < cantidadPersonas; indice++) {
  personas[indice] = edadRandom();
}

for (let indice = 0; indice < cantidadPersonas; indice++) {
  if (personas[indice] <= 21) {
    menores21++;
  } else {
    mayores21++;
  }
}
console.log(
  "la cantidad de personas menores de 21 años es: " + menores21,
  "la cantidad de personas mayores de 21 años es: " + mayores21,
  "la cantidad de personas que ingresaron al boliche son: " + cantidadPersonas
);
