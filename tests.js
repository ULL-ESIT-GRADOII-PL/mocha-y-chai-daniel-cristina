var expect = chai.expect;

describe("Medida", function() {
  describe("constructor", function() {
    it("Deberia dar valor a los atributos ", function() {
      var aux = new Medida("32", "c");
      expect(aux.value).to.equal("32");
      expect(aux.type).to.equal("c");
    });
  });
  describe("#convertir", function() {
    it("Deberia convertir de F a C", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });
  });
});
