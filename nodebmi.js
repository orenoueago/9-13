var readline = require('readline-sync');

var weight = readline.question('please enter your weight(KG)?');
var height = readline.question('please enter your height(cm)?');
var bmi=int(weight/((height/100)**2));
//document.getElementById("bmi").innerHTML = bmi;

if(bmi<=18.5){
    system.out.println("體重過瘦");
}else if(bmi>=18.5 && bmi<24){
    system.out.println("體重適中");
}else {
    system.out.println("體重過重");
}

console.log ('hello,your bmi is:'+ bmi);
 