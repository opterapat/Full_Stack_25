const a = 5;
const b = 10;

const add = function(x,y){
  return x + y

}
const addArrow = (x,y) => {
  return x + y
}

const substract  = (x,y) => {
  const result = x - y
  return result
}

console.log(`Addition :${add(a,b)}`);
console.log(`Addition (Arrow) :${addArrow(a,b)}`);
console.log(`Substraction (Arrow) :${substract(a,b)}`);