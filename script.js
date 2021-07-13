//Tic-Tac-Toe Main Script

//Left Off
//07/12 Working on logic fro rows. Need to fix counter pn line 70

const gameBoard = (() => {
    const container = document.getElementById("container");
    const columns = document.getElementsByClassName("columns");
    const cells = document.getElementsByClassName("cells");
    const size = 3;
    let win = false;


    function createDisplayGameBoard () {
        //creates columns
        for (let i = 0; i < size; ++i){
            let column = document.createElement("div");
            container.appendChild(column).className = "columns";
        }
        let dataNum = 0; // to identify each individual cell use for stylings
        for (let i = 0; i < size; ++i){
            for (let j = 0; j < size; ++j){
                let cell = document.createElement("div");
                cell.innerText = "-";
                cell.setAttribute("data", dataNum);
               console.log(cell.getAttribute("data"));
                columns[j].appendChild(cell).className = "cells";
                dataNum++;
            }
        }

    }
    function markPlayer(playGrid, player){
        if(playGrid.innerText == "-"){
            playGrid.innerText = player.mark;
        }
        else{
            return //add error if already marked

        }
    }
    
    function gameGrid(player) {
        let playGrid = [];
        for (let i =0; i< cells.length; ++i){
            playGrid[i] = cells[i];
            playGrid[i].addEventListener("click",()=> {
                markPlayer(playGrid[i], player);
            });
        }
    };
    function checkWin(){
        //check columns for same mark
        function checkRows(){
            win = false;
            let k = 0;
            for (let i = 0; i < size; ++i){
                xWin =0;
                oWin = 0;
    
                for (let j = 0; j < size; ++j){ //loop to reset win condition of 3 in a column
                    if (cells[k+i].innerText == "X"){
                        xWin+=3; //TODO: Fix counter
                        if(xWin == 3){
                            win=true;
                            console.log("x win");
                            break;
                        }
                    }
                    else if (cells[i].innerText == "O"){
                        oWin++;
                        if(oWin == 3){
                            win=true;
                            console.log("o win");
                            break;
                        }
                    }
                

                }
                k+=3;
            }
            return win;
        }

        //check columns
        function checkColumns() {
            let k = 0;
            let xWin = 0;
            let oWin = 0;
            win = false;
            for (let i = 0; i < size; ++i){
                xWin =0;
                oWin = 0;
    
                for (let j = 0; j < size; ++j){ //loop to reset win condition of 3 in a column
                    if (cells[k].innerText == "X"){
                        xWin++;
                        if(xWin == 3){
                            win=true;
                            console.log("xx win");
                            break;
                        }
                    }
                    else if (cells[i].innerText == "O"){
                        oWin++;
                        if(oWin == 3){
                            win=true;
                            console.log("oo win");
                            break;
                        }
                    }
                    k++;

                }
            }
            return win;
        }
        checkColumns();
        checkRows();
    }
    
    createDisplayGameBoard();
    return {gameGrid, checkWin};
})();
const Player = function(name, mark){
    this.name = name;
    this.mark = mark;
}
const userChoice = (() => {
    let user = new Player();  
    let computer = new Player("PC");  
    function getPlayerMark(){
        const markX = document.getElementById("playerX");
        const markO = document.getElementById("playerO");
        markX.addEventListener("click", ()=>{
            user.mark = "X";
            computer.mark = "O";
        });
        markO.addEventListener("click", () => {
            user.mark = "O";
            computer.mark = "X";
        });
    }
    function playerMove(){
        getPlayerMark();
        console.log(user)
        return user;
    }
    function computerMove(){
        getPlayerMark();
        return computer;
    }

  return {playerMove, computerMove};
})();
let b = userChoice.computerMove();
let a = userChoice.playerMove();
gameBoard.gameGrid(a);

//assigns user/computer 
// 3 win conidtions . loop for row, loop for column, check diag
//row 3 same, ex row 0, row 1, rtow 2
//column row0[pi], row 1[i], etc