//Function. this type take more size and use more memory it makes slow down
// we must use return key word,
function mytunction() {
  console.log("myFunction");
}

//Arrow Function. we use const in function becaue we didnot want to got in trouble in the function .
//()= its name is paranthesis,
// =>fat arrow
//{}= its name is argument brackets.

//
//
const myjunction = () => {
  console.log("myfunction");
};

//annonymus function which dont have any name
//like.....      find(ele=>{
//                       })
//

function myFunction(string) {
  return string + "abc";
}
console.log(myFunction("these are amazing"));
