function CheckDayType(day){
  day_type ={
    "Weekend" : ['Sunday','Saturday'],
    "Weekday": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  }
  for (type in day_type){
    if(day_type[type].map(d => d.toUpperCase()).includes(day.toUpperCase())){
      return type
    }
  }
  return 'invalid day'
}
console.log(CheckDayType('sunday'))


// day_type ={
//     "Weekend" : ['Sunday','Saturday'],
//     "Weekday": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// }
// console.log(day_type.Weekday.map(day => day.toUpperCase()));
