var ary2d=[[0,1,2,3],[4,5,6],[7,8,9]];
var Ans=[0,1,2,3,4,5,6,7,8,9];
//get index 0 at Ans:    Ans[0]
//get 6 in ary2d?
//ary2d[1][2];

//ary2d[1].push("N");
// = ary2d=[[0,1,2,3,"N"],[4,5,6],[7,8,9]]
//ary2d.push("N");
// = ary2d=[[0,1,2,3],[4,5,6],[7,8,9],"N"]

//push ["A","B","C"] to ary2d?
ary2d.push([]);
ary2d[3].push("A","B","C");
console.log(ary2d);

//Dynamic
var row = 9, col=7;
var dynaAry2d=[];
for(var _raw=0;_raw<row;_raw++)
{
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++)
    {
        dynaAry2d[_raw].push(_col+_raw*col);
    }
}