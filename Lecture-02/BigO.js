const startime = Date.now();

function someHeavyTask(){
  for (let i = 0 ;i < 5e7 ; i++){
    Math.sqrt(i);
  }
}
someHeavyTask()
const endtime = Date.now();
for (let i = 0 ; i < 10 ; i ++){
  console.log('Elapsed time : ',(endtime - startime),"ms");
}