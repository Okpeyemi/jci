var nav = document.getElementById("#nav");
var log = document.querySelector(".log");
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");
var block = document.querySelector(".block");

menu.addEventListener("click", () => {
    if (block.style.display = "none") {
        block.style.display = "block";
        menu.style.display = "none";
        close.style.display = "block";
    } else {
        block.style.display = "none";
    }
})

close.addEventListener("click", () => {
    if (block.style.display = "block") {
        block.style.display = "none";
        menu.style.display = "block";
        close.style.display = "none";
    } else {
        block.style.display = "block";
    }
})