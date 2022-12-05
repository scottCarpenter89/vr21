let timerId;
let counter = 0;

function incrementTime () {
        counter++;
        document.querySelector('#count').innerText = counter; 
}

function start () {
    if (!timerId) {
        timerId = setInterval(incrementTime, 1000);
    }
}

function stop () {
    clearInterval(timerId);
    timerId = null;
    counter = 0;
    document.querySelector('#count').innerText = "-";
}