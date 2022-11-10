function nine(params) {
  return params ? params(9) : 9;
}

function two(params) {
  return params ? params(2) : 2;
}
function times(params) {
  return (p) => p / params;
}

var a = two(times(nine()));
console.log(a);
