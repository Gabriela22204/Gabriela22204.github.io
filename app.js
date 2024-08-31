const cells = document.getElementById("maingrid").children;
const btnrestart = document.querySelector('#btnrestart');

const alertcontainer = document.getElementById("infocontainer");
const alertcontainer1 = document.getElementById("infocontainer1");

const darkMode = document.querySelector('dark-mode');

// dark-mode
function darkModeToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// grid events
// populate with the click events
function clickEvent(){
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click', function(){
            setToX(cells[i]);
        })
    }
}

// call main functions
clickEvent();
printArraysPos();
// checkGameState();




function setToX(cell){
    if(cell.innerHTML == "O" ){
        // alert("You can't click this!");
        alertbox();
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
        
        // call check row/col/diagonal function
        checkGameState();
        // print matrix
        // let arr = createArray(3, 3, cells.innerHTML);
        // console.log(arr);
        Filled();
        console.log("A tabela está cheia");
        return;
    }
    let cellNumber = Math.floor(Math.random() * 9);
    while(cells[cellNumber].innerHTML == "X" || cells[cellNumber].innerHTML == "O"){
        cellNumber = Math.floor(Math.random() * 9);
    }
    cells[cellNumber].innerHTML = "O";
}

// alert message
function alertbox(){
    // verify if cells and alertcontainer are valid ements
    if(!cells  || !alertcontainer){
        console.error('Elements did not find');
        return;
    }

    if(cells.innerHTML !== "X"){
        //console.log("showing alertcontainer");
        alertcontainer.style.display = 'flex';
        setTimeout(() => {
            alertcontainer.style.display = 'none';
        }, 1000)
        
    } else {
        //console.log('hiding alertcontainer after 2 seconds')
        setTimeout(() => {
            alertcontainer.style.display = 'none';
        }, 2000);
    }
    
}

// game clear ------------

// create array
function createArray(rows, cols, initialValue){
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < cols; j++){
            arr[i][j] = initialValue;
        }
    }
    return arr;
    
}


// storage celula's position + value
function printArraysPos(){
    for(let k = 0; k < cells.length; k++){
        cells[k].addEventListener('click', function(){
            // console.log(k);
            let valor = cells[k].innerHTML;
            console.log('valor celula:', k, valor);
        });

    }
}

function checkGameState(){
    checkHorizontal();
    checkVertical();
    // checkDiagonal();
  }
  
function checkHorizontal(){
    for(i = 0; i < 3; i++){
        let cell1 = cells[3*i + 0].innerHTML.trim();
        let cell2 = cells[3*i + 1].innerHTML.trim();
        let cell3 = cells[3*i + 2].innerHTML.trim();
        
        console.log(`Linha ${i}:`, cell1, cell2, cell3);

        if( cell1 === cell2 && cell2 === cell3 && cell1 !== ""){
            console.log("O jogo acabou! Vitória na linha " + i);
        }
        
    }
}

function checkVertical() {
    for(i = 0; i < 3; i++){
        let cell1 = cells[i].innerHTML.trim();
        let cell2 = cells[i + 3].innerHTML.trim();
        let cell3 = cells[i + 6].innerHTML.trim();

        console.log(`Coluna ${i}:`, cell1, cell2, cell3);

        if( cell1 === cell2 && cell2 === cell3 && cell1 !== ""){
            console.log("O jogo acabou! Vitória na coluna " + i);
        }
    }
}


// verify if all cells are competed
function Filled(){
    alertcontainer1.style.display = 'flex';
    setTimeout(() => {
        alertcontainer1.style.display = 'none';
    }, 1000)
}