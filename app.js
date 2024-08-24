const maingridcell1 = document.querySelector('#maingridcell1');
const maingridcell2 = document.querySelector('#maingridcell2');
const maingridcell3 = document.querySelector('#maingridcell3');
const maingridcell4 = document.querySelector('#maingridcell4');
const maingridcell5 = document.querySelector('#maingridcell5');
const maingridcell6 = document.querySelector('#maingridcell6');
const maingridcell7 = document.querySelector('#maingridcell7');
const maingridcell8 = document.querySelector('#maingridcell8');
const maingridcell9 = document.querySelector('#maingridcell9');

const btnrestart = document.querySelector('#btnrestart');


// sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// grid events

maingridcell1.addEventListener('click', function() {
    transformX1();
});

maingridcell2.addEventListener('click', function() {
    transformX2();
});

maingridcell3.addEventListener('click', function() {
    transformX3();
});

maingridcell4.addEventListener('click', function() {
    transformX4();
});

maingridcell5.addEventListener('click', function() {
    transformX5();
});

maingridcell6.addEventListener('click', function() {
    transformX6();
});

maingridcell7.addEventListener('click', function() {
    transformX7();
});

maingridcell8.addEventListener('click', function() {
    transformX8();
});

maingridcell9.addEventListener('click', function() {
    transformX9();
});


// restart button
btnrestart.addEventListener('click', function() {
    restartgame();
});

// choose random number to insert O ------------


// if x1 clicked
function chooseRandom1() {

    const valor = Math.floor(Math.random() * 3);

    // fill grid with O
    if(valor == 0){
        transformX2toO();
    } else if(valor == 1){
        transformX4toO();
    } else if(valor == 2) {
        transformX5toO();
    } 
    return valor;
}

// if x2 clicked
function chooseRandom2() {
    const valor = Math.floor(Math.random() * 5);
    if(valor == 0){
        transformX1toO();
    } 
    else if(valor == 1){
        transformX3toO();
    } 
    else if(valor == 2) {
        transformX4toO();
    }  
    else if(valor == 3) {
        transformX5toO();
    } 
    else if(valor == 4) {
        transformX6toO();
    } 
    return valor;
}

// if x3 clicked
function chooseRandom3() {

    const valor = Math.floor(Math.random() * 3);

    // fill grid with O
    if(valor == 0){
        transformX2toO();
    } else if(valor == 1){
        transformX5toO();
    } else if(valor == 2) {
        transformX6toO();
    } 
    return valor;
}

// if x4 clicked
function chooseRandom4() {
    const valor = Math.floor(Math.random() * 5);
    if(valor == 0){
        transformX1toO();
    } 
    else if(valor == 1){
        transformX2toO();
    } 
    else if(valor == 2) {
        transformX5toO();
    }  
    else if(valor == 3) {
        transformX7toO();
    } 
    else if(valor == 4) {
        transformX8toO();
    } 
    return valor;
}

// if x5 clicked
function chooseRandom5() {

    const valor = Math.floor(Math.random() * 8);

    // fill grid with O
    if(valor == 0){
        transformX1toO();
    } 
    else if(valor == 1){
        transformX2toO();
    } 
    else if(valor == 2) {
        transformX3toO();
    }  
    else if(valor == 3) {
        transformX4toO();
    } 
    else if(valor == 4) {
        transformX6toO();
    } 
    else if(valor == 5) {
        transformX7toO();
    } 
    else if(valor == 6) {
        transformX8toO();
    } 
    else if(valor == 7) {
        transformX9toO();
    } 
    return valor;
}

// if x6 clicked
function chooseRandom6() {
    const valor = Math.floor(Math.random() * 8);
    if(valor == 0){
        transformX3toO();
    } 
    else if(valor == 1){
        transformX5toO();
    } 
    else if(valor == 2) {
        transformX2toO();
    }  
    else if(valor == 3) {
        transformX8toO();
    } 
    else if(valor == 4) {
        transformX9toO();
    } 
    else if(valor == 5) {
        transformX1toO();
    }
    else if(valor == 6) {
        transformX4toO();
    }
    else if(valor == 7) {
        transformX7toO();
    }
    return valor;
}

// if x7 clicked
function chooseRandom7() {

    const valor = Math.floor(Math.random() * 3);

    // fill grid with O
    if(valor == 0){
        transformX4toO();
    } else if(valor == 1){
        transformX5toO();
    } else if(valor == 2) {
        transformX8toO();
    } 
    return valor;
}

// if x8 clicked
function chooseRandom8() {
    const valor = Math.floor(Math.random() * 5);
    if(valor == 0){
        transformX4toO();
    } 
    else if(valor == 1){
        transformX5toO();
    } 
    else if(valor == 2) {
        transformX6toO();
    }  
    else if(valor == 3) {
        transformX7toO();
    } 
    else if(valor == 4) {
        transformX9toO();
    } 
    return valor;
}

// if x9 clicked
function chooseRandom9() {

    const valor = Math.floor(Math.random() * 3);

    // fill grid with O
    if(valor == 0){
        transformX5toO();
    } else if(valor == 1){
        transformX6toO();
    } else if(valor == 2) {
        transformX8toO();
    } 
    return valor;
}

// insert O to grids -------------------------





function transformX1toO() {
    document.getElementById("x1").innerHTML = "o";
}

function transformX2toO() {
    document.getElementById("x2").innerHTML = "o";
}

function transformX3toO() {
    document.getElementById("x3").innerHTML = "o";
}

function transformX4toO(){
    document.getElementById("x4").innerHTML = "o";
}

function transformX5toO(){
    document.getElementById("x5").innerHTML = "o";
}

function transformX6toO(){
    document.getElementById("x6").innerHTML = "o";
}

function transformX7toO(){
    document.getElementById("x7").innerHTML = "o";
}

function transformX8toO(){
    document.getElementById("x8").innerHTML = "o";
}

function transformX9toO(){
    document.getElementById("x9").innerHTML = "o";

}






// insert X to grids --------------------------------


async function transformX1() {
    document.getElementById("x1").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x1").innerHTML === 'x')
        {
        // call random function
        chooseRandom1();
        
        }
        
    }

async function transformX2() {
    document.getElementById("x2").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x2").innerHTML === 'x')
        {
        // call random function
        chooseRandom2();
        
        }
}

async function transformX3() {
    document.getElementById("x3").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x3").innerHTML === 'x')
        {
        // call random function
        chooseRandom3();
        
        }
}

async function transformX4() {
    document.getElementById("x4").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x4").innerHTML === 'x')
        {
        // call random function
        chooseRandom4();
        
        }
}

async function transformX5() {
    document.getElementById("x5").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x5").innerHTML === 'x')
        {
        // call random function
        chooseRandom5();
        
        }
}

async function transformX6() {
    document.getElementById("x6").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x6").innerHTML === 'x')
        {
        // call random function
        chooseRandom6();
        
        }
}

async function transformX7() {
    document.getElementById("x7").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x7").innerHTML === 'x')
        {
        // call random function
        chooseRandom7();
        
        }
}

async function transformX8() {
    document.getElementById("x8").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x8").innerHTML === 'x')
        {
        // call random function
        chooseRandom8();
        
        }
}

async function transformX9() {
    document.getElementById("x9").innerHTML = "x";
    await sleep(500);
    if(document.getElementById("x9").innerHTML === 'x')
        {
        // call random function
        chooseRandom9();
        
        }
}

// restart game
function restartgame() {
    // clean all grids
    document.getElementById('x1').innerHTML = " ";
    document.getElementById('x2').innerHTML = " ";
    document.getElementById('x3').innerHTML = " ";
    document.getElementById('x4').innerHTML = " ";
    document.getElementById('x5').innerHTML = " ";
    document.getElementById('x6').innerHTML = " ";
    document.getElementById('x7').innerHTML = " ";
    document.getElementById('x8').innerHTML = " ";
    document.getElementById('x9').innerHTML = " ";
}



