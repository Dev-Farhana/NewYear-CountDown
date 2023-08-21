const dayEle = document.getElementById('days');
const hourEle = document.getElementById('hours');
const mintEle = document.getElementById('min');
const monEle = document.getElementById('months');

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

countDownYear();

function countDownYear(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    console.log(gap);

    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;
    const month = day * 30;

    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap% hour) / min);
    const d = Math.floor(gap / day);
    const mnth = Math.floor(gap/ month); 

    monEle.innerHTML = mnth;
    dayEle.innerHTML = d;
    hourEle.innerHTML = h;
    mintEle.innerHTML = m;

    setTimeout( countDownYear, 1000)
}

 


