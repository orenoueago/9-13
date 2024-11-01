const Live = 1;
const Dead = 0;

class Life{
    constructor(_row,_col){
        this.row = _row;
        this.col = _col;
        this.grid = [];    //new Array()

        for(var _raw=0;_raw<this.row;_raw++)
            {
                this.grid.push([]);
                for(var _col=0;_col<this.col;_col++)
                {
                    this.grid[_raw].push(Dead);
                }
            }
    }
     initialize = function(random){
        if(random == true){
            for (var _row = 0; _row < this.row; _row++) {
                for (var _col = 0; _col < this.col; _col++) {
                    this.grid[_row][_col] = (Math.random()<0.3) ? Live : Dead;
                }
            }
        }else{
        this.grid[1][1] = Live;
        this.grid[1][2] = this.grid[1][3] = this.grid[1][4] = Live;
    }
}
     update = function(){
        var nextGrid=JSON.parse(JSON.stringify(this.grid));
        //travse all elements, count its neighbor
        var neighbor;
        for (let _row = 0; _row < this.row; _row++) {
           for (let _col = 0; _col < this.row; _col++) {
            neighbor = this.neighborCount(_row,_col);
            //update by 4 rules
            if(this.getStatusAt(_row,_col)==Live && (neighbor<=1 || neighbor>=4)){
                nextGrid[_row][_col] = Dead;
            }
            if(this.getStatusAt(_row,_col)==Dead && neighbor==3){
               nextGrid[_row][_col] = Live;
            }
           } 
            
        }

        this.grid = null;
        this.grid = nextGrid;
     }

     neighborCount = function(row,col){
        var count=0;
        count += this.getStatusAt(row-1, col-1);
        count += this.getStatusAt(row-1, col);
        count += this.getStatusAt(row-1, col+1);

        count += this.getStatusAt(row, col-1);
        count += this.getStatusAt(row, col+1);

        count += this.getStatusAt(row+1, col-1);
        count += this.getStatusAt(row+1, col);
        count += this.getStatusAt(row+1, col+1);
        return count;
     }
     getStatusAt = function(row,col){
        if(row<0 || col<0 || row>=this.row || col>=this.col){
              return Dead;
        }else{
            return this.grid[row][col];
        }
     }
}
function drawGrid(game) {
    var elementscanvas = document.getElementById("map");
    var canvas = elementscanvas.getContext("2d");
    game.size = size= Math.min(elementscanvas.height / game.row, elementscanvas.width / game.col);

    for (var _row = 0; _row < game.row; _row++) {
        for (var _col = 0; _col < game.col; _col++) {
            if (game.grid[_row][_col] == Live) {
                canvas.fillStyle = "#000000";
            } else {
                canvas.fillStyle = "#ffffff";
            }
            canvas.fillRect(_col * size, _row * size, size, size);
            canvas.strokeRect(_col * size, _row * size, size, size);
        }
    }
}

function drawpoint(game,_row,_col){
    var elementscanvas = document.getElementById("map");
    var canvas = elementscanvas.getContext("2d");
    game.size = size= Math.min(elementscanvas.height / game.row, elementscanvas.width / game.col);
    if (game.grid[_row][_col] == Live) {
        canvas.fillStyle = "#000000";
    } else {
        canvas.fillStyle = "#ffffff";
    }
    canvas.fillRect(_col * size, _row * size, size, size);
    canvas.strokeRect(_col * size, _row * size, size, size);
}



function NEXT(){
    myGame.update();
    drawGrid(myGame);
}

function mouseclick(event){
    var _row = Math.floor(event.offsetY/myGame.size);
    var _col = Math.floor(event.offsetX/myGame.size);
    if(myGame.getStatusAt(_row,_col)==Live){
        myGame.grid[_row][_col] = Dead;
    }else{
        myGame.grid[_row][_col] = Live;
    }
   drawpoint(myGame,_row,_col);
}

function Random(){
    myGame.initialize(true);
    drawGrid(myGame);
}

var myTime;
function Run(){
    var step = document.getElementById("step"),value;
    myTime = setInterval(NEXT,Number(step));
}

function Stop(){
    clearInterval(myTime);
}

var myGame = new Life(60,60);
var myGame2 = new Life(100,100);
myGame.initialize();
drawGrid(myGame);
