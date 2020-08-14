let timer = setInterval(incrementCounter, 1000);
const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');

minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
pauseButton.addEventListener('click', pauseCounter);



function decrementCounter() {
    let result = parseInt(counter.innerText);
    result--;
    counter.innerText = result;
};

function incrementCounter() {
    let result = parseInt(counter.innerText);
    result++; 
    counter.innerText = result; 
}

function pauseCounter() {
    if (pauseButton.innerText === 'pause') {
        clearInterval(timer);
        toggleButtons()
        pauseButton.innerText = 'resume';
    }
    else {
        timer = setInterval(incrementCounter, 1000);
        toggleButtons()
        pauseButton.innerText = 'pause';
    }
};



function toggleButtons() {
    minusButton.disabled = !minusButton.disabled;
    plusButton.disabled = !plusButton.disabled;
    heartButton.disabled = !heartButton.disabled;
};