import calculator from '../modules/calculator'

test('add', () => {
  expect(calculator.add(4,5)).toBe(9)
})

test('substract', () => {
  expect(calculator.substract(7,3)).toBe(4)
})

test('divide', () => {
  expect(calculator.divide(20,4)).toBe(5)
})

test('multiply', () => {
  expect(calculator.multiply(3,4)).toBe(12)
})