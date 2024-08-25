const cells = document.getElementById("maingrid").children;
const btnrestart = document.querySelector('#btnrestart');

// sleep
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// grid events
// populate with the click events
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(){
        setToX(cells[i]);
    })
}

function setToX(cell){
    if(cell.innerHTML == "O" ){
        alert("You can't click this!");
        return;
    }
    cell.innerHTML = "X";
    setRandomO();
}

// restart button
btnrestart.addEventListener('click', function() {
    restartgame();
});

function restartgame() {
    // clean all grids
    for(let i = 0; i < cells.length; i++){
        cells[i].innerHTML = "";
    }
}

// choose random number to insert O ------------
async function setRandomO(){
    let filledCells = 0;
    for(let i = 0; i < cells.length; i++){
        if(cells[i].innerHTML == "X" || cells[i].innerHTML == "O"){
            filledCells++;
        }
    }
    if(filledCells == 9){
        console.log("A tabela está cheia");
        return;
    }
    let cellNumber = Math.floor(Math.random() * 9);
    while(cells[cellNumber].innerHTML == "X" || cells[cellNumber].innerHTML == "O"){
        cellNumber = Math.floor(Math.random() * 9);
    }
    cells[cellNumber].innerHTML = "O";
}