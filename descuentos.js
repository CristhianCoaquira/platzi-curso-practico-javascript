const calcularPrecioConDescuento = (precio, descuento) =>
  (precio * (100 - descuento)) / 100;

function EventCalcularPrecioConDescuento() {
    const precio = document.getElementById("precio").value;
    const descuento = document.getElementById("descuento").value;
    document.getElementById("precioDescuento").value = calcularPrecioConDescuento(precio, descuento)
}