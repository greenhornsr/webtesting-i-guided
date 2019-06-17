module.exports = {
  add,
};

function add(args) {
  const values = Array.isArray(args) ? args: Array.from(arguments);

  return values.reduce((accu, curr) => {
    return accu + curr
  }, 0); 
}
