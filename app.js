const cells = document.getElementById("maingrid").children;
const btnrestart = document.querySelector('#btnrestart');

const alertcontainer = document.getElementById("infocontainer");
const alertcontainer1 = document.getElementById("infocontainer1");

const darkMode = document.querySelector('dark-mode');
const switchToggle = document.getElementById('switch');
// sleep
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

//dark-mode
function darkModeToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// grid events
// populate with the click events
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(){
        setToX(cells[i]);
    })
}

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
        console.log("A tabela está cheia");
        // call game clear function
        gameclear();
        
        //gameclear();
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

    // verify cells item
    //console.log('cells item:', cells.innerHTML);

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

// game clear
function gameclear(){
    alertcontainer1.style.display = 'flex';
    setTimeout(() => {
        alertcontainer1.style.display = 'none';
    }, 1000)
    // verify if all cells are completed
}