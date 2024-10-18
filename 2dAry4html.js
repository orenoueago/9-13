var ary2d=[
[0,1,0,0,1],
[1,1,0,1,0],
[0,0,0,1,1],
[1,0,1,1,1],
[0,1,0,1,0],
];

var row=ary2d.length;
var col=ary2d[0].length;


var canvas = document.getElementById("map").getContext("2d");
var widthsize=canvas.width/row
var lengthsize=canvas.length/row
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
        canvas.fillRect(_row*120,_col*120,widthsize,lengthsize);
        canvas.strokeRect(_row*120,_col*120,widthsize,lengthsize);
    }
}