const lista1 = [
    100,
    200,
    300,
    500
];


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, valorActual) {
        return valorAcumulado + valorActual;
    });
    return sumaLista / lista.length;
}