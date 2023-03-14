const display = document.getElementById("display");
const url = "http://127.0.0.1:5500/FrontendLearning/ModernJS_P03/Web%20API/data.txt"
function getData() {
    fetch(url)
        .then((res) => res.text())
        .then((data) => {
            console.log("hello 2");
            display.innerText = data;
        });

        console.log("hello");
}