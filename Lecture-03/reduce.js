const numbers = [15,16,17,18,19,20];
const sum = numbers.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue ;
});

console.log(sum);