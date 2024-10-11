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
for(var _raw=0;_raw<row;_raw++)
{
    for(var _col=0;_col<col;_col++)
    {
        dynaAry2d[_raw].push(_col+_raw*col);
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#0000ff"
        }else{
            canvas.fillStyle="#000000"
        }
        canvas.fillRect(_row*120,_col*120,widthsize,lengthsize);
        canvas.strokeRect(_row*120,_col*120,widthsize,lengthsize);
    }
}