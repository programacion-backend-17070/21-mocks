const Calculadora = require("../calculadora")

describe(() => {
  it('should add two numbers', () => {
    const suma = Calculadora.suma(5, 3)

    expect(suma).toBe(8)
  })

  it('should divide two number', () => {
    const divide = Calculadora.divide(4, 2)

    expect(divide).toBe(2)
  })

})