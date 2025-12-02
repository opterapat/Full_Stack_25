const fullname = " Anirach  Mingkhwan  ";

const clenname = fullname.trim();
console.log(`Trimed Name : ${clenname}`,fullname);

const splitname = clenname.split(" ");
console.log(`Split Name : ${splitname}`,splitname);

const finalPart = splitname.filter(Boolean);
console.log(`Final Name : ${finalPart}`,finalPart);

const firstName = finalPart[0];
console.log(`First Name : ${firstName}`,firstName);
