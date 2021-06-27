//Tic-Tac-Toe Main Script

//Left Off
//6.27 - working on module for gameboard. 
//working out logic for listeners for player moves
// trying to pass user.mark 


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
        let playerMark = player;
        playGrid.innerText = playerMark;
        console.log("hello")

    }

    function gameGrid(player) {
        let playGrid = [];
        for (let i =0; i< cells.length; ++i){
            playGrid[i] = cells[i];
            console.log(player)
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
    function getPlayer(){
        let user;
        const markX = document.getElementById("playerX");
        const markO = document.getElementById("playerO");
        markX.addEventListener("click", ()=>{
            user = new Player("Player 1", "x");
            return user.mark;
        });
        markO.addEventListener("click", () => {
            //let user = Player("Player 1", "O");
    
        });
        return user;
    }

  return {getPlayer};
})();

let a = userChoice.getPlayer()
gameBoard.gameGrid(a);
//assigns user/computer 
