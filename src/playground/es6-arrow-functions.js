const square = function(x) {
  return x * x;
}

const squareArrow = (x) => {
  return x * x;
}

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mary Jones'));

console.log(squareArrow(3));
console.log("hello");
