// - DRUM BUTTON START //
var drum = document.querySelectorAll(".drum");
var numberOfButton = drum.length;



for(let i = 0; i < numberOfButton; i++){
    drum[i].addEventListener("click", play);
}

function play() {
    this.innerHTML = "";
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}

// - DRUM BUTTON END - //


/*
for(let i = 0; i < numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
} 

function handleClick() {
    alert("I got clicked!");
}
*/