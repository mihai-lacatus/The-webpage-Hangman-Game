//DOM cache
var body = document.getElementsByTagName("BODY");
var start = document.getElementById("start");
var about = document.getElementById("About");
var title = document.getElementById("Title");

var tag = document.getElementById("name");
var enter = document.getElementById("enter");
var register = document.getElementById("register");
var register_after = document.getElementById("register_after");
var first = document.getElementById("first");
var nume = document.getElementById("name_enter");
var password = document.getElementById("password");

var timer;
var time;
var time_up;
var time_down;
var i = 255;
var j = 255;
var k = 255;
var step = 1;
var ef = 1;
var dim = 70;
var index = 0;

// create a JSON object
var userData;

//timer for background transition
timer = setInterval(Load, 17);

//events on start button
start.onclick = function() {
    location.href = "index.html";
}
start.addEventListener('mouseover', function() {
    start.style.width = "150px";
    start.style.height = "90px";
    start.style.marginRight = "50px";
    start.style.backgroundColor = "rgb(0, 155, 0)";
})
start.addEventListener('mouseout', function() {
    start.style.width = "160px";
    start.style.height = "100px";
    start.style.marginRight = "40px";
    start.style.backgroundColor = "black";
})

//events on reguli button
about.onclick = function() {
    location.href = "reguli.html";
}
about.addEventListener('mouseover', function() {
    about.style.width = "150px";
    about.style.height = "90px";
    start.style.marginRight = "50px";
    about.style.backgroundColor = "rgb(0, 155, 0)";
})
about.addEventListener('mouseout', function() {
    about.style.width = "160px";
    about.style.height = "100px";
    start.style.marginRight = "40px";
    about.style.backgroundColor = "black";
})

//effect for title
title.addEventListener('mouseover', function() {
    clearInterval(time_down);
    time_up = setInterval(title_up, 20);
    time = setInterval(Effect, 100);
})
title.addEventListener('mouseout', function() {
    title.style.color = "black";
    clearInterval(time);
    clearInterval(time_up);
    console.log(dim);
    time_down = setInterval(title_down, 20);
})


//function for background downgrade transitions
function Load() {
    if (step < 255) {
        i--;
        document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    }
    if (step >= 255 && step < 510) {
        j--;
        document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    }
    if (step >= 510) {
        if (k > 110) {
            k--;
            document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
        }
    }

    step++;

    if (step == 655) {
        clearInterval(timer);
        i = 0;
        j = 0;
        k = 110;
        step = 1;
        timer = setInterval(Load2, 17);
    }

}

//function for background upgrade transitions
function Load2() {
    if (step < 255) {
        i++;
        document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';

    }
    if (step >= 255 && step < 510) {
        j++;
        document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    }
    if (step >= 510) {
        k++;
        document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    }

    step++;

    if (step == 635) {
        clearInterval(timer);
        i = 255;
        j = 255;
        k = 255;
        step = 1;
        timer = setInterval(Load, 17);
    }

}

//function for changing the title color
function Effect() {
    if (ef % 2 != 0) {
        title.style.color = "rgb(83, 47, 128)";
    } else {
        title.style.color = "rgb(214, 94, 15)";
    }
    ef++;
}

function title_up() {

    dim++;
    title.style.fontSize = dim + "px";

    if (dim == 90) {
        clearInterval(time_up);
    }
}

function title_down() {

    dim--;
    title.style.fontSize = dim + "px";
    if (dim <= 70) {
        clearInterval(time_down);
        dim = 70;
    }
}