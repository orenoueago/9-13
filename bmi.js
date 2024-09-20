
function calcbmi(){
var weight = parseInt(document.getElementById("weight").value);
var height = parseInt(document.getElementById("height").value);
var bmi=weight/((height/100)**2);
document.getElementById("bmi").innerHTML = bmi;

console.log ('hello,your bmi is:'+ bmi);
 
}
IPO