let count = 0;

const display = document.getElementById("count");

function updateCounter() {

    display.innerHTML = count;

    // Change number color
    if(count == 0){
        display.style.color = "black";
    }
    else if(count <= 10){
        display.style.color = "green";
    }
    else if(count <= 20){
        display.style.color = "orange";
    }
    else{
        display.style.color = "red";
    }

    // Pop animation
    display.style.transform = "scale(1.3)";

    setTimeout(function(){
        display.style.transform = "scale(1)";
    },150);
}

function increase(){

    count++;

    updateCounter();
}

function decrease(){
    count--;
    updateCounter();
}

function resetCounter(){

    count = 0;

    updateCounter();

    // Rotation effect
    display.style.transform = "rotate(360deg)";

    setTimeout(function(){
        display.style.transform = "rotate(0deg)";
    },300);
}