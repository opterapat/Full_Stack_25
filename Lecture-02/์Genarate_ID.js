function genarateTempID(){
  const randompart = Math.random().toString(36).substring(2,8);
  return randompart.toUpperCase();
}

const orderId = genarateTempID();
console.log(`Order ID : ${orderId}`)