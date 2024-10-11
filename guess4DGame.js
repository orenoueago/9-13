var readline = require("readline-sync");

var Ans = [0,1,2,3,4,5,6,7,8,9];
for(var i=0;i<4;i++)
{
    var rand = Math.floor(Math.random()*10);
    var temp = Ans[i];
    Ans[i] = Ans[rand];
    Ans[rand] = temp;
}

Ans = Ans.slice(0,4);

var gCount = 10;
do
{
    var G=readline.questionInt("Plesae input 4 digits?");
}while(String(G).length!=4)

var Gstr = G.toString();
var countA = 0,countB = 0;

for(var i=0;i<4;i++)
{
    //if(Ans[i] == Gstr[i])
    //    countA++;
    //else if(Ans.includes(Gstr[i]))
    //{
    //    countB++;
    //}
    for(var j=0;j<4;j++)
    {
       if(Ans[i]==Gstr[j])
       {
        if(i==j)
            countA++;
        else 
            countB++;
       }
    }
}
gCount--;

console.log("Result: "+countA+"A"+countB+"B");

if(countA==4)
{
    console.log("You win!");
}
while(countA<4 && gCount>0)
{
}

if(countA<4)
{
    console.log("You lose~");
}