var readline = require('readline-sync');

var weight = readline.question('please enter your weight(KG)?');
var height = readline.question('please enter your height(cm)?');
var bmi=weight/((height/100)**2);
//document.getElementById("bmi").innerHTML = bmi;

console.log ('hello,your bmi is:'+ bmi);
 