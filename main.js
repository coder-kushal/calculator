const display = document.querySelector("#display");

let fakeDisplay = ""; // Internal display

function append(value, shown = value) {
    if (display.classList.contains("recent") && !['+', '-', '*', '/', '.'].includes(value)) {
        if (display.value == "Error" || display.value == "Infinity") {
            display.value = "";
            fakeDisplay = "";
            display.classList.remove("recent");
            return;
        }
        display.value = ""; 
        fakeDisplay = "";
    }
    if (['+', '-', '*', '/'].includes(fakeDisplay[fakeDisplay.length - 1]) && ['+', '-', '*', '/'].includes(value)) {
        display.classList.remove("recent");
        display.value = display.value.slice(0, display.value.length - 1) + shown;
        fakeDisplay = fakeDisplay.slice(0, fakeDisplay.length - 1) + value;
        return;
    }
    if (fakeDisplay.split(/[+\-*/]/).pop().includes(".") && value == ".") {
        display.classList.remove('recent');
        return;
    }
    display.classList.remove("recent");
    display.value += shown;
    fakeDisplay += value;
}

function allClear() {
    display.classList.remove("recent");
    display.value = "";
    fakeDisplay = "";
}

function singleDelete() {
    display.classList.remove("recent");
    if (display.value == "Error" || display.value == "Infinity") {
        display.value = "";
        return;
    }
    display.value = display.value.slice(0, display.value.length - 1);
    fakeDisplay = fakeDisplay.slice(0, fakeDisplay.length - 1);
}

function calculate() {
    try {
        if (fakeDisplay !== "") {
            display.value = Number(Number(eval(fakeDisplay)).toFixed(5));
            fakeDisplay = display.value;
            display.classList.add("recent");
        }
    }
    catch (err) {
        display.value = "Error";
        fakeDisplay = "";
        display.classList.add("recent");
    }

}