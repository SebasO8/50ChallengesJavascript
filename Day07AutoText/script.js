const text = document.querySelector('#text');
const prog = "We Love Programing!";
let idx = 0.2; 

setInterval(writeText, 100);

function writeText(){
  text.innerText = prog.slice(0,idx);
  idx++;
  if (idx >prog.length){
    idx = 0.2;
  }
}