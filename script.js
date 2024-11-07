const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            // Evaluate the expression
            try {
                display.value = eval(display.value) || "";
            } catch {
                display.value = "error";
            }
        } else if (button.value !== "C" && button.value !== "del") {
            display.value += button.value;
        }
    });
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

deleteButton.addEventListener("click", () => {
    if (display.value.length > 0) {
        display.value = display.value.slice(0,-1);
    }
});
