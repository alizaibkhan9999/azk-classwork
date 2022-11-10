/*const abc = {
  a: `a`,
  b: `b`,
  c: {
    d: `d`,
  },
};
const { b, ...re } = abc;
console.log(abc);


const arr = [1, 2, 3, 4, 5, 6];

const [b, c, a, ...re] = arr;
console.log(a);
*/

/*
rew();
const rew = function () {
  console.log("abc");
};*/

function creditcrd(num) {
  var a = num.split(`-`);
  console.log(a);
  if (num.length == 16) {
    console.log(alert("welcome"));
  } else {
    alert("invalid card");
  }
}
creditcrd("1552-6587-9976-5433");
