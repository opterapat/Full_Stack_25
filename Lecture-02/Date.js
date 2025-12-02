const registrationdate = '2023-09-17T10:00:00Z';
const options = {
  year :'numeric',
  month : 'long',
  day : 'numeric',
  timeZone : 'Asia/Bangkok'
};

const formattedDate = new Date(registrationdate).toLocaleDateString('th-TH',options);

console.log('Registration Date :',formattedDate);