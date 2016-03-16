var expect = chai.expect;

describe("Medida", function() {
/*
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
  });*/
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
/*
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

    it("Debería ser de la clase Medida", function() {
      var temperatura = new Temperatura('32', 'f');
      expect(temperatura.value).to.equal('32');
      expect(temperatura.type).to.equal('f');

      expect(temperatura).to.be(Temperatura);
    });

  });*/
/*
  describe("Celsius: Constructor, #toFarenheit, #toKelvin", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Celsius(32);
      expect(temperatura.toFarenheit()).to.equal(89.6);
      expect(temperatura.toKelvin()).to.equal(305.15);
      var cel = new Celsius(32, 'f');

      expect(cel).to.be.a('Temperatura');

    });
  });
*/
  describe("Farenheit: Constructor, #toCelsius, #toKelvin", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Farenheit(32);
      expect(temperatura.toCelsius()).to.equal(0);
      expect(temperatura.toKelvin()).to.equal(273.15);
      expect(temperatura).to.be.instanceof(Farenheit);


    });
  });

  describe("Kelvin: Constructor, #toFarenheit, #toCelsius", function() {
    it("Debería convertir de una temperatura cualquiera a Celsius", function() {

      var temperatura = new Kelvin(273.15);
      expect(temperatura.toFarenheit()).to.equal(32);
      expect(temperatura.toCelsius()).to.equal(0);
      expect(temperatura).to.be.instanceof(Kelvin);


    });
  });

});





describe('Conversiones', function() {
    describe('Celsius', function () {
        var medida = new Celsius(0);
        it('toFahrenheit"', function () {
            expect(medida.toFarenheit()).to.equal(32);
        });

        it('toKelvin"', function () {
          expect(medida.toKelvin()).to.equal(273.15);
        });
    });
    describe('Kelvin', function () {
        var medida = new Kelvin(273.15);
        it('toFahrenheit"', function () {
            expect(medida.toFarenheit()).to.equal(32);
        });

        it('toCelsius"', function () {
          expect(medida.toCelsius()).to.equal(0);
        });
    });
    describe('Farenheit', function () {
        var medida = new Farenheit(32);
        it('toCelsius"', function () {
          expect(medida.toCelsius()).to.equal(0);
        });

        it('toKelvin"', function () {
          expect(medida.toKelvin()).to.equal(273.15);
        });
    });
});



describe("Creación de un objeto Temperatura", function(){
   var temperatura = new Temperatura(23,'F');
   it("Debe tener un número", function(){
      expect(temperatura.valor).to.equal(23);
   });
   it("Debe tener una unidad de medida", function(){
      expect(temperatura.tipo).to.equal('F');
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
