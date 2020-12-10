import capitalize from '../modules/capitalize'

test ('capitalizing', () => {
  expect(capitalize('testing this')).toBe('Testing this')
})