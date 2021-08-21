function calcularModa(lista)
{
    return lista.sort(function (primero, segundo) {
        return lista.filter(valor => valor === primero).length - lista.filter(valor => valor === segundo).length
    }).pop();
}