var ary2d=[
[0,1,0,0,1,0],
[1,1,0,1,0,1],
[0,0,0,1,1,1],
[1,0,1,1,1,0],
[0,1,0,1,0,1],
];

var row=ary2d.length;
var col=ary2d[0].length;


var canvas = document.getElementById("map").getContext("2d");
var size=Math.min(canvas.canvas.high/row,canvas.canvas.width/row);
for(var _row=0;_row<row;_row++)
{
    for(var _col=0;_col<col;_col++)
    {
        ary2d[_row].push(_col+_row*col);
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#0000ff"
        }else{
            canvas.fillStyle="#000000"
        }
        canvas.fillRect(_col*size,_row*size,size,size);
        canvas.strokeRect(_col*size,_row*size,size,size);
    }
}