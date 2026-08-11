const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn =  document.getElementById("decreaseBtn");
let counter = document.getElementById("counter");
let i =0;
increaseBtn.addEventListener("click",()=>{
    
    i++;
    counter.innerText=i;
})

decreaseBtn.addEventListener("click",()=>{
    if(i<1) return;
    i--;
    counter.innerText=i;
})

