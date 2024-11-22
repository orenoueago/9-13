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
        return this.row == end.row && this.col == end.col
    }
}
var start = new Point(0,0);
var end = new Point(9,9);
var Stack=[];
var step = start;

function go(){
    Stack.push(step);
    MAZE[step.row][step.col]==2;
    while(! step.isEnd()){
        //up
        if(MAZE[step.row-1][step.col] == 0){
            step = new Point(step.row-1, step.col);
            MAZE[step.row][step.col]==2;
            Stack.push(step);
        }else if(MAZE[step.row+1][step.col] == 0){     //down
            step = new Point(step.row+1, step.col);
            MAZE[step.row][step.col]==2;
            Stack.push(step);
        }else if(MAZE[step.row][step.col-1] == 0){     //left
            step = new Point(step.row, step.col-1);
            MAZE[step.row][step.col]==2;
            Stack.push(step);
        }else if(MAZE[step.row][step.col-1] == 0){     //right
            step = new Point(step.row, step.col+1);
            MAZE[step.row][step.col]==2;
            Stack.push(step);
        }else{                                         //back
            if(Stack.length>0)
                step = Stack.pop();
        }
    }
    if(Stack.length>0)
        console.log("done!");
    else
        console.log("Not solution yet");
}