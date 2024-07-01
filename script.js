// space, shift, backspace, numbers, letters
let keys = [32, 8, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

let hInput = document.getElementById("type");
let hText = document.querySelector(".type-display");
let hCaret = document.querySelector(".caret");
let hOutOfFocus = document.querySelector(".out-of-focus");
let hKeys = document.querySelectorAll(".keyboard-key");

function updateVisiblity() {
    if (hInput === document.activeElement) {
        hInput.style.visibility = "visible";
        hText.style.visibility = "visible";
        hCaret.style.visibility = "visible";
        hOutOfFocus.style.visibility = "hidden";
    } else {
        hInput.style.visibility = "hidden";
        hText.style.visibility = "hidden";
        hCaret.style.visibility = "hidden";
        hOutOfFocus.style.visibility = "visible";
    }
}

function run(key) {
    console.log(key);
}

document.addEventListener("click", function() {
    updateVisiblity();
});

hOutOfFocus.onclick = function() {
    hInput.style.visibility = "visible";
    hInput.focus();
    updateVisiblity();
};

hInput.onkeydown = function(e) {
    run(e.keyCode);
    return false;
};

hInput.onkeyup = function(e) {

}

updateVisiblity();