console.log('hello');
var d, hour, minute, second, color;

var isHovering = false;

$("#timeid").mouseenter(function(event){
    isHovering = true;
    console.log('I\'m hovering');
});

$("#timeid").mouseleave(function(event){
    isHovering = false;
    console.log('I\m not hovering');
});

function displayTime() {
    d = new Date();

    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();

    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;

    var hexHour = ('0' + hour.toString(16)).slice(-2);
    var hexMinute = ('0' + minute.toString(16)).slice(-2);
    var hexSecond = ('0' + second.toString(16)).slice(-2);

    if(isHovering){
        // if true do this
        document.querySelector('.time').textContent = '#' + hexHour + hexMinute + hexSecond;

    } else {
        // else do this
        document.querySelector('.time').textContent = hour + ":" + minute + ":" + second;
    }



    x = second;
    per = 1.667;

    result = x * per;
    percent = result + "%";
    // console.log(percent);



    var color = "#" + hexSecond + hexMinute + hexSecond;

    console.log('color', color);




    document.getElementById("timeid").style.backgroundColor = color;
}

var timer = setInterval(displayTime, 1000);


var isHovering = false;

$("#timeid").mouseenter(function(event){
    isHovering = true;
    console.log('I\'m hovering');
});

$("#timeid").mouseleave(function(event){
    isHovering = false;
    console.log('I\m not hovering');
});







