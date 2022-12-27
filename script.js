const mainbutton=document.querySelector("button")
const body=document.body;
const currentcolor=document.querySelector(".currentcolor")
function random(){
  const red=Math.floor(Math.random()*256)
  const green=Math.floor(Math.random()*256)
  const blue=Math.floor(Math.random()*256)
  const rcolor=`rgb(${red},${green},${blue})`
  return rcolor;
}
mainbutton.addEventListener("click",function(){
  const randomc=random();
  body.style.backgroundColor=randomc;
  currentcolor.texContent=randomc;
})