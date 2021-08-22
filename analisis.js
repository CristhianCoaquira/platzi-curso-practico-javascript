const salariosBol = bolivia.map(function (persona) {
  return persona.salary;
});

const salariosBolSorted = salariosBol.sort(function (a, b) {
  return a - b;
});

const medianaGeneral = medianaSalarios(salariosBolSorted);

const spliceStart = (salariosBolSorted.length * 90) / 100;
const spliceCount = salariosBolSorted.length - spliceStart;

const salariosTop10 = salariosBolSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(medianaGeneral, medianaTop10)

function esPar(numero) {
    return (numero % 2 === 0);
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elem1 = lista[mitad - 1];
        const elem2 = lista[mitad];
        return calcularMediaAritmetica([elem1, elem2]);
    } else {
        return lista[mitad];
    }
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, valorActual) {
    return valorAcumulado + valorActual;
  });
  return sumaLista / lista.length;
}