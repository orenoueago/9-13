
function calcbmi(){
var weight=document.getElementById("weight")
var height=document.getElementById("height")
var bmi=weight/((height/100)**2);

console.log ('hello,your bmi is'+bmi);

}