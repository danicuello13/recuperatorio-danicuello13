const {
  calcularFactorial,
  encontrarNumeroMayor,
  sumarNumeros
} = require('../index');

// Pruebas para sumarNumeros
describe("Actividad 1: sumarNumeros", () => {
  it("debe sumar dos números positivos correctamente", () => {
    expect(sumarNumeros(3, 5)).toBe(8);
  });

  it("debe sumar un número positivo y un número negativo correctamente", () => {
    expect(sumarNumeros(10, -7)).toBe(3);
  });

  it("debe sumar dos números negativos correctamente", () => {
    expect(sumarNumeros(-5, -3)).toBe(-8);
  });
});

// Pruebas para calcularFactorial
describe("Actividad 2: calcularFactorial", () => {
  it("debe calcular el factorial de 0 correctamente", () => {
    expect(calcularFactorial(0)).toBe(1);
  });

  it("debe calcular el factorial de 1 correctamente", () => {
    expect(calcularFactorial(1)).toBe(1);
  });

  it("debe calcular el factorial de un número positivo correctamente", () => {
    expect(calcularFactorial(5)).toBe(120);
  });

  it("debe calcular el factorial de un número grande correctamente", () => {
    expect(calcularFactorial(10)).toBe(3628800);
  });
});

// Pruebas para encontrarNumeroMayor
describe("Actividad 3: encontrarNumeroMayor", () => {
  it("debe encontrar el número mayor en una matriz simple correctamente", () => {
    const matriz = [[3, 5, 7], [1, 2, 4], [6, 8, 9]];
    expect(encontrarNumeroMayor(matriz)).toBe(9);
  });

  it("debe encontrar el número mayor en una matriz con valores negativos correctamente", () => {
    const matriz = [[-3, -5, -7], [-1, -2, -4], [-6, -8, -9]];
    expect(encontrarNumeroMayor(matriz)).toBe(-1);
  });

  it("debe encontrar el número mayor en una matriz con números decimales correctamente", () => {
    const matriz = [[1.5, 2.3, 4.7], [0.5, 1.8, 3.2], [6.9, 7.1, 9.0]];
    expect(encontrarNumeroMayor(matriz)).toBe(9.0);
  });
});