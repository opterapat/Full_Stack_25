const istatus = 500 ;
if(istatus === 200){
  console.log('OK!')
}
else if(istatus === 400){
  console.log("ERROR")
}
else{
  console.log("UNKNOW")
};

switch (istatus){
  case 200:
    console.log("Ok")
    break;
  case 400:
    console.log('Bad Requset');
    break;
  default:
    console.log('Unknow Status');
    break;
}

const statusMessage = 
  istatus === 200 ? 'OK' : 
  istatus === 500 ?'WOW':
  'Bad Request';

console.log(statusMessage);
