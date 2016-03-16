var expect = chai.expect;

describe("Medida", function() {
  describe("constructor", function() {
    it("Deberia dar valor a los atributos (tipo, valor) ", function() {
      var aux = new Medida("32", "c");
      expect(aux.value).to.equal("32");
      expect(aux.type).to.equal("c");
    });
    it("Deberia crear el objeto sin tipo ", function() {
      var aux = new Medida("32c");
      expect(aux.value).to.equal("32");
      expect(aux.type).to.equal("c");
    });
  });
  describe("#convertir", function() {
    it("Deberia convertir de F a C", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
    it("Deberia dar error al pasar a una temperatura desconocida", function() {
      expect(Medida.convertir("32f to f")).to.equal('Desconozco como convertir desde "f" hasta "f"');
    });
    it("Deberia dar error al pedir una conversion erronea", function() {
      expect(Medida.convertir("32f a k")).to.equal('Introduzca una temperatura valida: 32.6e-8 F to C');
    });
  });
});

describe("Temperatura", function() {
  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var temperatura = new Temperatura(57, 'f');
      expect(temperatura.value).to.equal(57);
      expect(temperatura.type).to.equal('f');
    });

    it("Debería aceptar un valor y un tipo en un mismo parámetro", function() {
      var temperatura = new Temperatura("32c");
      expect(temperatura.value).to.equal('32');
      expect(temperatura.type).to.equal('c');
    });
  });

  describe("Celsius: Constructor, #toFarenheit, #toKelvin", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Celsius(32);
      expect(temperatura.toFarenheit()).to.equal(89.6);
      expect(temperatura.toKelvin()).to.equal(305.15);

    });
  });

  describe("Farenheit: Constructor, #toCelsius, #toKelvin", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Farenheit(32);
      expect(temperatura.toCelsius()).to.equal(0);
      expect(temperatura.toKelvin()).to.equal(273.15);

    });
  });

  describe("Kelvin: Constructor, #toFarenheit, #toCelsius", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Kelvin(273.15);
      expect(temperatura.toFarenheit()).to.equal(32);
      expect(temperatura.toCelsius()).to.equal(0);

    });
  });

});
/*
describe("Conversor", function() {
  describe("Funciones de conversion", function() {
    it("Deberia convertir de Celsius a Kelvin y a Farenheit ", function() {
      Celsius cel = new Celsius(0);
      expect(cel.toFarenheit()).to.equal(32);
    //  expect(aux.type).to.equal("c");
    });

  });
});
*/
