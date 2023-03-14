const display = document.getElementById("display");
const url = "http://127.0.0.1:5500/FrontendLearning/ModernJS_P03/Web%20API/data.txt"

async function getData(){
    const res = await fetch(url);
    const data = await res.text();

    display.innerText = data;
}