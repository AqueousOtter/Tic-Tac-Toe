//Tic-Tac-Toe Main Script

//Left Off
//6.23 - working on module for gameboard. 
//working out logic for listeners for player moves


const gameBoard = (() => {
    const container = document.getElementById("container");
    const rows = document.getElementsByClassName("rows");
    const cells = document.getElementsByClassName("cells");
    const size = 3;


    function displayGameBoard () {
        //creates rows
        for (let i = 0; i < size; ++i){
            let row = document.createElement("div");
            container.appendChild(row).className = "rows";
        }
        for (let i = 0; i < size; ++i){
            for (let j = 0; j < size; ++j){
                let cell = document.createElement("div");
                cell.innerText = "s";
                rows[j].appendChild(cell).className = "cells";
            }
        }

    }
    function markPlayer( playGrid){
        let playerMark = "2";
        playGrid.innerText = playerMark;

    }

    function gameGrid() {
        let playGrid = [];
        for (let i =0; i< cells.length; ++i){
            playGrid[i] = cells[i];
            playGrid[i].addEventListener("click", markPlayer(playGrid[i]));
        }
    };
    return {displayGameBoard,gameGrid};
})();

gameBoard.displayGameBoard();
gameBoard.gameGrid();