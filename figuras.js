const perimetroCuadrado = (lado) => Number(lado) * 4;

const areaCuadrado = (lado) => lado * lado;

const perimetroTriangulo = (lado1, lado2, base) =>
  Number(lado1) + Number(lado2) + Number(base);

const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;

const areaCirculo = (radio) => radio * radio * Math.PI;

function calcularPerimetroArea() {
  let perimetro = 0;
  let area = 0;
  switch (document.getElementById("figura").value) {
    case "cuadrado":
      perimetro = perimetroCuadrado(
        document.getElementById("ladoCuadrado").value
      );
      area = areaCuadrado(document.getElementById("ladoCuadrado").value);
      break;
    case "triangulo":
      const lado1 = document.getElementById("ladoTriangulo1").value;
      const lado2 = document.getElementById("ladoTriangulo2").value;
      const base = document.getElementById("baseTriangulo").value;
      const altura = document.getElementById("alturaTriangulo").value;
      perimetro = perimetroTriangulo(lado1, lado2, base);
      area = areaTriangulo(base, altura);
      break;
    case "circulo":
      perimetro = perimetroCirculo(
        document.getElementById("radioCirculo").value
      );
      area = areaCirculo(document.getElementById("radioCirculo").value);
      break;
    default:
      break;
  }
  document.getElementById("perimetro").value = perimetro;
  document.getElementById("area").value = area;
}

document.addEventListener("DOMContentLoaded", function () {
  const figuraSelect = document.getElementById("figura");
  hideAndShowFieldsByFigura(figuraSelect.value);
  figuraSelect.addEventListener("change", function () {
    hideAndShowFieldsByFigura(this.value);
  });

  function hideAndShowFieldsByFigura(figura) {
    const cuadradoFields = document.getElementById("cuadradoFields");
    cuadradoFields.style.display = "none";
    const trianguloFields = document.getElementById("trianguloFields");
    trianguloFields.style.display = "none";
    const circuloFields = document.getElementById("circuloFields");
    circuloFields.style.display = "none";
    switch (figura) {
      case "cuadrado":
        cuadradoFields.style.display = "block";
        break;
      case "triangulo":
        trianguloFields.style.display = "block";
        break;
      case "circulo":
        circuloFields.style.display = "block";
        break;
      default:
        break;
    }
  }
});
