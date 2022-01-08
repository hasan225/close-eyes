let closed = document.querySelector(".closed");
let open = document.querySelector(".open");


closed.addEventListener("click", ()=>{
    open.classList.toggle("opened")
    closed.classList.toggle("close")
})
open.addEventListener("click", ()=>{
    closed.classList.remove("close")
    open.classList.toggle("opened")
})