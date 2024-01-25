let value = document.querySelector("#display")
let btn = document.querySelectorAll("button")

btn.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            value.innerText = "";
        } else if (item.id == "backspace") {
            let slice = value.innerText.toString();
            value.innerText = slice.slice(0, -1);
        } else if (value.innerText != "" && item.id == "equal") {
            value.innerText = eval(value.innerText);
        } else if (value.innerText == "" && item.id == "equal") {
            value.innerText = "Empty!";
            setTimeout(() => (value.innerText = ""), 2000);
        } else {
            value.innerText += item.id;
        }
    };
});

let btnn = document.querySelector(".theme-toggler");
let change = document.querySelector(".calculator");
// let toggleIcon = document.querySelector(".toggler-icon");
let dark = true;
btnn.onclick = () => {
    change.classList.toggle("dark");
    btnn.classList.toggle("active");
    dark = !dark;
};

