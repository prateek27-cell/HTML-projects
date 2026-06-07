let timeScreen = document.querySelector('.timeScreen');
let StopBtn = document.getElementById ('StopBtn');
let StartBtn = document.getElementById ('StartBtn');
let ResetBtn = document.getElementById ('ResetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerID = null;

StartBtn.addEventListener('click', function(){

    if(timerID !== null){
        
        clearInterval(timerID);
    }

    timerID = setInterval(startTimer, 10);
});

StopBtn.addEventListener('click', function(){

        clearInterval(timerID);
});

ResetBtn.addEventListener('click', function(){

        clearInterval(timerID);

        msec = 0;
        secs = 0;
        mins = 0;

    timeScreen.innerHTML = `00 : 00 : 00`;
});

function startTimer(){

    msec++;

    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecStr;
    if(msec < 10){

        msecStr = `0${msec}`;
    }
    else{
        msecStr = msec;
    }

    let secsStr;
    if(secs < 10){

        secsStr = `0${secs}`;
    }
    else{
        secsStr = secs;
    }

    let minsStr;
    if(mins < 60){

        minsStr = `0${mins}`;
    }
    else{

        minsStr = mins;
    }

    timeScreen.innerHTML = `${minsStr}:${secsStr}:${msecStr}`
}
