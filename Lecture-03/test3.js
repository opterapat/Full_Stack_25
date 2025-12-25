const guest = ['alice','Bob','Charlie','David'];
let index = 0;
while(true){
    index = index+1
    if(guest[index] === 'Charlie'){
        console.log("found index :",index)
        break ;
    }
}

const message = "Hello World";
const show = ['a','e','i','o','u']
for(char of message){
    if(show.includes(char)){
        console.log(char);
    }
}