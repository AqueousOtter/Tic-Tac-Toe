//Tic-Tac-Toe Main Script

//Left Off
//6.27 - working on module for gameboard. 
//working out logic for listeners for player moves
// trying to pass user.mark 
//assigns user/computer 
// 3 win conidtions . loop for row, loop for column, check diag
//row 3 same, ex row 0, row 1, rtow 2
//column row0[pi], row 1[i], etc


const gameBoard = (() => {
    const container = document.getElementById("container");
    const rows = document.getElementsByClassName("rows");
    const cells = document.getElementsByClassName("cells");
    const size = 3;


    function createDisplayGameBoard () {
        //creates rows
        for (let i = 0; i < size; ++i){
            let row = document.createElement("div");
            container.appendChild(row).className = "rows";
        }
        let dataNum = 0; // to identify each individual cell use for stylings
        for (let i = 0; i < size; ++i){
            for (let j = 0; j < size; ++j){
                let cell = document.createElement("div");
                cell.innerText = "-";
                cell.setAttribute("data", dataNum);
               console.log(cell.getAttribute("data"));
                rows[j].appendChild(cell).className = "cells";
                dataNum++;
            }
        }

    }
    function markPlayer(playGrid, player){
        if(playGrid.innerText == "-"){
            playGrid.innerText = player.mark;
        }
        else{
            return
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

    createDisplayGameBoard();
    return {gameGrid};
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