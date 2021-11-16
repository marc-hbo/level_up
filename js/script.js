let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.toggle('active');
};



const startingMinutes = 30;
let time = startingMinutes * 60;

const countDown = document.getElementById('minutes');

 setInterval(updatecountdow, 1000);
   function updatecountdow(){
        const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDown.innerHTML = `${minutes} : ${seconds}`;
            time--;
            time = time < 0 ? 0:time;
    }





/*
var countDate = new Date('nov 12, 2021 00:00:00').getTime();

function countDown(){

    var now = new Date().getTime();  
    gap = countDate - now;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days  = hours * 24;

    var d = Math.floor(gap/(days));
    var h = Math.floor(gap%(days)/ (hours));
    var m = Math.floor(gap%(hours) /(minutes));
    var s = Math.floor(gap%(minutes)/(seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown();
}, 1000)

 video */

