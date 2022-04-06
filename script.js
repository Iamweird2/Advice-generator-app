let button = document.querySelector(".button");
let slip_container = document.querySelector(".advice-number");
let slip_id = document.querySelector(".advice-number").value;
let para = document.querySelector(".textcontent")

function call(){
    slip_id = document.querySelector(".advice-number").value;
    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
    .then(res => res.json())
    .then(data => {
        para.textContent = `${data.slip.advice}`;
    })
} 

window.onload = ()=>{
    slip_container.value = 71;
    call();
}   

button.addEventListener("click", ()=>{
    call();
})