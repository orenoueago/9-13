var MAZE = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];


class Point{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
    }
    isEnd = function(){
        return this.row === end.row && this.col === end.col
    }
}
var start = new Point(0,0);
var end = new Point(9,9);
var Stack=[];
var step = start;
var rollback = false;

var ary=[1,5,6,2,9];
ary.sort=((a,b)=>{return b-a})
ary.sort=((a,b)=>{return Math.random()-0.5});

var dir=[{x:-1,y:0}, {x:1,y:0}, {x:0,y:-1}, {x:0,y:1},];
dir.sort((a,b)=>{return b.x-a.x});
dir.sort((a,b)=>{return Math.random()-0.5});



function go(){
    Stack.push(step);
    const Interval = setInterval(()=>{
    while(! step.isEnd()){
        drawGrid()
        MAZE[step.row][step.col] = 2;
        if(MAZE[step.row + dir[0].x][step.col + dir[0].y] == 0){        
            if(rollback){
                Stack.push(step)
                rollback=false;
            }
            step = new Point(step.row + dir[0].x, step.col + dir[0].y);
            Stack.push(step);
        }else if(MAZE[step.row + dir[1].x][step.col + dir[1].y] == 0){     
            if(rollback){
                Stack.push(step)
                rollback=false;
            }
            step = new Point(step.row + dir[1].x, step.col + dir[1].y);
            Stack.push(step);
        }else if(MAZE[step.row + dir[2].x][step.col + dir[2].y] == 0){     
            if(rollback){
                Stack.push(step)
                rollback=false;
            }
            step = new Point(step.row + dir[2].x, step.col + dir[2].y);
            Stack.push(step);
        }else if(MAZE[step.row + dir[3].x][step.col + dir[3].y] == 0){     
            if(rollback){
                Stack.push(step)
                rollback=false;
            }
            step = new Point(step.row + dir[3].x, step.col + dir[3].y);
            Stack.push(step);
        }else                                         //back
            if(Stack.length>0){
                step = Stack.pop();
                rollback=true;
            }else
               break;
    
    }
    if(Stack.length>0)
        console.log("done!");
    else
        console.log("Not solution yet");
 },1000);
}
function drawGrid() {
    var elementscanvas = document.getElementById("map");
    var canvas = elementscanvas.getContext("2d");
    var size = Math.min(elementscanvas.height /MAZE.length, elementscanvas.width / MAZE[0].length);

    for (var _row = 0; _row < MAZE.length; _row++) {
        for (var _col = 0; _col < MAZE[0].length; _col++) {
            if (MAZE[_row][_col] == 0) {
                canvas.fillStyle = "#000000";
            } else if (MAZE[_row][_col] == 1){
                canvas.fillStyle = "#ffffff";
            }else if (MAZE[_row][_col] == 2){
                canvas.fillStyle = "#f00fff";
            }
            canvas.fillRect(_col * size, _row * size, size, size);
            canvas.strokeRect(_col * size, _row * size, size, size);
        }
    }
}

