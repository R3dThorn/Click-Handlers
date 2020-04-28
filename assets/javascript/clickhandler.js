const color_box = document.querySelector("#color_box");
// JS for the gray button
const gray_button = document.querySelector("#gray_button");
gray_button.addEventListener("click", function () {
    color_box.className = "gray";
})
// JS for the blue button
const blue_button = document.querySelector("#blue_button");
blue_button.addEventListener("click", function () {
    color_box.className = "blue";
})
// JS for the pink button
const pink_button = document.querySelector("#pink_button")
pink_button.addEventListener("click", function() {
    color_box.className = "pink"
})
let count = 0;
const countspan = document.querySelector("#countspan");
const counter_button = document.querySelector("#counter_button");
counter_button.addEventListener("click", function () {
    let newCounterValue = Number(countspan.innerHTML) + 1;
    countspan.innerHTML = newCounterValue
})
const even_or_odd_button = document.querySelector("#even_or_odd_button");
even_or_odd_button.addEventListener("click", function () {
    let newCounterValue = parseInt(countspan.innerHTML)
    if (newCounterValue % 2 === 0 || newCounterValue === 0){
        window.alert("The count is even!")
    }
    if (newCounterValue % 2 === 1){
        window.alert("The count is odd!")
    }
})