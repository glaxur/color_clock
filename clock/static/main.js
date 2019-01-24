console.log('hey');
var d, hour, minute, second, color;

function displayTime() {
    d = new Date();

    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();

    if(hour <= 9) hour = '0'+hour;
    if(minute <= 9) minute = '0'+minute;
    if(second <= 9) second = '0'+second;

   document.querySelector('.time').textContent= hour + ":" + minute + ":" +second
   x = second;
   per = 1.667;

   result = x * per;
   percent = result + "%";
   console.log(percent);

   currentTime = hour + ':' + minute + ':' + second;
   color = "#" + hour + minute + second;

   document.body.style.background = color;


}


var timer = setInterval(displayTime, 1000);