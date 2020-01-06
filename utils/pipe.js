// creates a new function from passed in functions that will run them sequentially
module.exports = (...fns) => {
  return arg => fns.reduce((val, fn) => fn(val), arg)
}
