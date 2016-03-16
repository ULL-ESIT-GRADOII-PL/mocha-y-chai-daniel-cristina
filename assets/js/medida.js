function Medida(valor,tipo) {

  var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*([a-zA-Z])\s*$/i;
    var val = regexp.exec(valor);
    if (val) {
      this.valor = parseFloat(val[1]);
      this.tipo = val[2];
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
}

Medida.match = function(valor) {
  expresion = XRegExp('(?<num>   [-+]?[^\\.][0-9]+([\\.][0-9]+)?\\s*(?:e[+-]?[ ]*[0-9]+)?)\\s*   # numero       \n' +
                           '(?<temp1>    [fkcFKC])\\s*                                       # temperatura1 \n' +
                           '(?<to>       (?:to)?)\\s*                                        # to           \n' +
                           '(?<temp2>    [fkcFKC])\\s*                                       # temperatura2','x');

  valor = XRegExp.exec(valor, expresion);
  return valor;
}

 ///no sé
Medida.measures = {};

Medida.convertir = function(valor) {
  var measures = Medida.measures;
  measures.c = Celsius;
  measures.f = Farenheit;
  measures.k = Kelvin;
  measures.K = Kelvin;
  measures.F = Farenheit;
  measures.C = Celsius;

  var match = Medida.match(valor);
  if (match) {
    var numero = parseFloat(match.num),
        tipo   = match.temp1,
        destino = match.temp2;

    try {
      console.log(measures[tipo]);
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " " + measures[destino].name; // "0 Celsius"
    }
    catch(err) {
      console.log(err);
      return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
    }
  }
  else
    return "Introduzca una temperatura valida: 32.6e-8 F to C";
};
