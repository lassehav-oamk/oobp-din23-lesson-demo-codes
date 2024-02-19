// const plus5 = value => value + 5;
// const plus10 = value => value + 10;
// const plus15 = value => plus10(plus5(value))


//const plusser = plusVal => value => value + plusVal;
function plusser(plusVal) {
  return function (value) {
    return value + plusVal;
  }
}


const plus5 = plusser(5);
const plus10 = plusser(10);
const plus15 = plusser(15);


console.log(plus5(20));
console.log(plus10(20));

console.log(plus15(5));