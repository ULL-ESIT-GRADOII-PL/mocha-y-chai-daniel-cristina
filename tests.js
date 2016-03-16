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
