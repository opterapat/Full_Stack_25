let x = '';
for(let i= 1;i <= 100;i++){
  if (i < 10) {
    padding = '  '; // Two spaces
  } else {
    padding = ' ';  // One space
  }  x += padding + String(i);
  if(i % 5 === 0){
    x+= '\n'
  }
}
console.log(x)
