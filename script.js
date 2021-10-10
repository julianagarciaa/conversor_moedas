function ConverterDolar() {
  var valorElemento = document.getElementById("valorDolar");
  var valorDolar = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valorDolar);
  var valorEmReal = valorEmDolarNumerico * 5.37;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
  var valorConvertidoDolar = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertidoDolar;
}
function ConverterEuro() {
  var valorElemento = document.getElementById("valorEuro");
  var valorEuro = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valorEuro);
  var valorEmReal = valorEmEuroNumerico * 6.22;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var valorConvertidoEuro = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertidoEuro;
}