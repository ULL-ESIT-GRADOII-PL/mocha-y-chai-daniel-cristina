var expect = chai.expect;

describe("Medida", function() {
  describe("convertir", function() {
    it("Deberia convertir de F a C", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });

  });
});
