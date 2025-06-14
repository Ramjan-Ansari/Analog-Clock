let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime (){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotetion = 30*hh + mm/2;
    let mRotetion = 6*mm;
    let sRotetion = 6*ss;

    hr.style.transform = `rotate(${hRotetion}deg)`;
    min.style.transform = `rotate(${mRotetion}deg)`;
    sec.style.transform = `rotate(${sRotetion}deg)`;

};

setInterval(displayTime, 1000);