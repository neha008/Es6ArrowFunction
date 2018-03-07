//es5
const square = function(x){
    return x*x;
};

//es6 (arrow functions) always anonymous

//const squareArrow = (x) => {
  //  return x*x;
//};
//console.log(squareArrow (8));
const squareArrow = (x) => x*x;
//es5 functions can have name
function dosquare(x){
    return x*x;
};


const getFirstName = (name) =>{
    return name.split(' ')[0];
}
console.log(getFirstName("neha jain"))

const getSecondName = (name) => name.split(' ')[1];

console.log(getSecondName("neha jain"));
