function createLogEntry(message){
  const now = new Date();
  const timestamp = now.toLocaleDateString('th-TH');
  const eventID = Math.random().toString(16).substring(2,10).toUpperCase();
  const LogMessage = message.toUpperCase();

  return `[${timestamp}][${eventID}] - ${LogMessage}`;
}
console.log(`${createLogEntry("-User logged in succesfully")}-User logged in succesfully`)

