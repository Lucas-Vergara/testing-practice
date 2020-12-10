
const analyze = (array) => {
  const add = (acum, current) => acum + current
  const sum = array.reduce(add)
  const object = {
    average: sum/array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
  return object
}

export default analyze