let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de alumnos a registrar")
);
let arregloNombres: string[] = new Array(dimensionArreglo);
let notasTrim1: number[] = new Array(dimensionArreglo);
let notasTrim2: number[] = new Array(dimensionArreglo);
let notasTrim3: number[] = new Array(dimensionArreglo);
let indice: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNombres[indice] = String(prompt("Ingrese el nombre del alumno"));
  notasTrim1[indice] = Number(prompt("Ingrese la nota N°1"));
  notasTrim2[indice] = Number(prompt("Ingrese la nota N°2"));
  notasTrim3[indice] = Number(prompt("Ingrese la nota N°3"));

  let suma = 0;
  let promedio = 0;

  suma = notasTrim1[indice] + notasTrim2[indice] + notasTrim3[indice];

  promedio = suma / 3;

  console.log(
    "El promedio del estudiante " + "",
    "" + arregloNombres[indice] + "",
    "" + "es" + "",
    "" + promedio
  );
}
