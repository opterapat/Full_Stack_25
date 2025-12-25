let value1 = ['Apple',1,false,2];
let value2 = ['Fries',2,true,'Apple',1];
let value3 = ['Mars',9,'Apple',1];
let answer = []
for (let item1 of value1){
    for(let item2 of value2){
        for(let item3 of value3){
            if(item1 === item2 && item2 === item3){
                answer.push(item1);
            };
        };
    };
};
console.log(answer);
