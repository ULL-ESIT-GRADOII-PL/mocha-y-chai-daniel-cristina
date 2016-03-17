var expect = chai.expect;



describe("Clase Medida", function() {

  describe("constructor", function() {
    it("Deberia tener un constructor con dos parámetros", function() {
      var medida = new Medida (32, 'f');
      expect(medida.valor).to.equal(32);
    });
    it("Deberia poder recibir un solo parametro", function() {
     var medida = new Medida ("5 f");
     expect(medida.valor).to.equal(5);
     expect(medida.tipo).to.equal('f');
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
   describe("#funcion match", function () {
     it("Debería aceptar patron", function () {
    var valor = Medida.match('330e-1 f to c');
      expect(parseFloat(valor.num)).to.equal(330e-1);
      expect(valor.temp1).to.equal('f');
      expect(valor.temp2).to.equal('c');
    });
   });
});


describe("Clase Temperatura", function() {
  describe("constructor", function() {
    it("Deberia dar valor a los atributos (tipo, valor) - 2 argumentos ", function() {
      var aux = new Temperatura(32, "c");
      expect(aux.valor).to.equal(32);
      expect(aux.tipo).to.equal("c");
    });
    it("Deberia dar valor a los atributos (tipo, valor) - 1 argumento", function() {
      var aux = new Temperatura("32 c");
      expect(aux.valor).to.equal(32);
      expect(aux.tipo).to.equal("c");
    });
  });
});



describe("Clase Celsius", function() {
	describe("constructor celsius", function () {
	  it("Deberia tener un constructor", function () {
        var cel = new Celsius (37);
        expect(cel.valor).to.equal(37);
      });
	});
    describe("#toFarenheit", function () {
	  it("Deberia pasar a Farenheit", function () {
      var temperatura = new Celsius(32);
      expect(temperatura.toFarenheit()).to.equal(89.6);
	  });
    });
	describe("#toKelvin", function () {
		it("Deberia pasar a Kelvin", function () {
		var temperatura = new Celsius(32);
		expect(temperatura.toKelvin()).to.equal(305.15);
		});
	});
});


describe("Clase Farenheit", function() {
	describe("constructor farenheit", function () {
	  it("Deberia tener un constructor", function () {
        var temperatura = new Farenheit(32);
        expect(temperatura.valor).to.equal(32);
		expect(temperatura).to.be.instanceof(Farenheit);
      });
	});
    describe("#toCelsius", function () {
	  it("Deberia pasar a Celsius", function () {
      var temperatura = new Farenheit(32);
      expect(temperatura.toCelsius()).to.equal(0);
	  });
    });
	describe("#toKelvin", function () {
		it("Deberia pasar a Kelvin", function () {
		var temperatura = new Farenheit(32);
		expect(temperatura.toKelvin()).to.equal(273.15);
		});
	});
});



describe("Clase Kelvin", function() {
	describe("constructor farenheit", function () {
	  it("Deberia tener un constructor", function () {
        var temperatura = new Kelvin(32);
        expect(temperatura.valor).to.equal(32);
		expect(temperatura).to.be.instanceof(Kelvin);
      });
	});
    describe("#toFarenheit", function () {
	  it("Deberia pasar a Farenheit", function () {
      var temperatura = new Kelvin(273.15);
      expect(temperatura.toFarenheit()).to.equal(32);
	  });
    });
	describe("#toCelsius", function () {
		it("Deberia pasar a Celsius", function () {
		var temperatura = new Kelvin(273.15);
		expect(temperatura.toCelsius()).to.equal(0);
		});
	});
});


describe("Conversiones usando medida", function() {
    describe("Celsius", function () {
        var medida = new Celsius(0);
        it("#toFarenheit", function () {
            expect(medida.toFarenheit()).to.equal(32);
        });

        it("#toKelvin", function () {
          expect(medida.toKelvin()).to.equal(273.15);
        });
    });
    describe("Kelvin", function () {
        var medida = new Kelvin(273.15);
        it("#toFarenheit", function () {
            expect(medida.toFarenheit()).to.equal(32);
        });

        it("#toCelsius", function () {
          expect(medida.toCelsius()).to.equal(0);
        });
    });
    describe("Farenheit", function () {
        var medida = new Farenheit(32);
        it("#toCelsius", function () {
          expect(medida.toCelsius()).to.equal(0);
        });

        it("#toKelvin", function () {
          expect(medida.toKelvin()).to.equal(273.15);
        });
    });
});
