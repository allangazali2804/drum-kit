var numberOfButton = document.querySelectorAll(".drum").length;
for(let i = 0; i < numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
}
/*
for(let i = 0; i < numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("I got clicked!");
}
*/