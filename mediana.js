function calcularMediana(lista) {
  lista.sort(function (first, second) {
    return first - second;
  });
  const centro = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const elemento1 = lista[centro - 1];
    const elemento2 = lista[centro];
    return calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    return lista[centro];
  }
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, valorActual) {
    return valorAcumulado + valorActual;
  });
  return sumaLista / lista.length;
}
