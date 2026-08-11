let count = 0;
let limitOn = false;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const settingsBtn = document.getElementById("settingsBtn");
const closeBtn = document.getElementById("closeBtn");

const counterPage = document.getElementById("counterPage");
const settingsPage = document.getElementById("settingsPage");

const setCountInput = document.getElementById("setCountInput");
const limitToggle = document.getElementById("limitToggle");

const colorButtons = document.querySelectorAll(".color");


const savedColor = localStorage.getItem("appColor");
if(savedColor){
    document.documentElement.style.setProperty("--app-color", savedColor);
}


function updateCounter(){
    counter.textContent = count;
}

increaseBtn.addEventListener("click", () => {
    if(limitOn){
        count = Math.min(100, count + 1);
    }else{
        count++;
    }
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    if(limitOn){
        count = Math.max(0, count - 1);
    }else{
        count--;
    }
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});


settingsBtn.addEventListener("click", () => {
    counterPage.style.display = "none";
    settingsPage.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    counterPage.style.display = "flex";
    settingsPage.style.display = "none";
});


setCountInput.addEventListener("input", () => {
    const value = parseInt(setCountInput.value);

    if(isNaN(value)){
        count = 0;
    }else if(limitOn){
        count = Math.max(0, Math.min(100, value));
    }else{
        count = value;
    }

    updateCounter();
});


limitToggle.addEventListener("change", () => {
    limitOn = limitToggle.checked;

    if(limitOn){
        count = Math.max(0, Math.min(100, count));
        updateCounter();
    }
});


colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedColor = button.dataset.color;

        document.documentElement.style.setProperty("--app-color", selectedColor);
        localStorage.setItem("appColor", selectedColor);

        colorButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

updateCounter();