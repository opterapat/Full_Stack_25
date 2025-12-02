const original =  "JavaScript is fun but sometime JavaScript can be tricky.";
function censoredword(sentence,WordToCensor){
  const regex = new RegExp(WordToCensor, "gi");
  const censoredText = sentence.replace(regex,"***")
  return censoredText
}
const cleanpost = censoredword(original,"JavaScript")
console.log(cleanpost)