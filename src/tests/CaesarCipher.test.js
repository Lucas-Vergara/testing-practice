import caesarCipher from '../modules/CaesarCipher'

test('Caesar Cipher', () => {
  expect(caesarCipher('aBcD? ZyXw!', 6)).toBe('gHiJ? FeDc!')
})