let slider = document.getElementById("inputRange");
let output = document.getElementById("value");


function showSliderValue() {
    output.innerHTML = slider.value;

    const position = (slider.value / slider.max),
        spaceLeft = slider.offsetWidth - output.offsetWidth;

    output.style.left = (position * spaceLeft) + 'px';

    if (slider.value <= 50) {
        output.style.borderRadius = "50% 50% 50% 0px"
    } else {
        output.style.borderRadius = "50% 50% 0px"
    }
}

showSliderValue()

slider.oninput = function () {
    showSliderValue()
}