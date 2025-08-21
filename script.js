let btnIngredients = document.getElementById("btnIngredients");
let btnSteps = document.getElementById("btnSteps");
let startBtn = document.getElementById("startBtn");
let nextBtn = document.getElementById("nextBtn");

let ingredients = document.getElementById("ingredients");
let steps = document.getElementById("steps");
let stepList = document.querySelectorAll("#stepList li");

let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

let currentStep = -1;

btnIngredients.onclick = function() {
  if (ingredients.style.display === "block") {
    ingredients.style.display = "none";
    btnIngredients.innerText = "Show Ingredients";
  } else {
    ingredients.style.display = "block";
    btnIngredients.innerText = "Hide Ingredients";
  }
};

btnSteps.onclick = function() {
  if (steps.style.display === "block") {
    steps.style.display = "none";
    btnSteps.innerText = "Show Steps";
  } else {
    steps.style.display = "block";
    btnSteps.innerText = "Hide Steps";
  }
};

function updateProgress() {
  let done = currentStep + 1;
  let total = stepList.length;
  let percent = Math.round((done / total) * 100);
  progressBar.style.width = percent + "%";
  progressText.innerText = "Progress: " + percent + "%";
}

startBtn.onclick = function() {
  steps.style.display = "block";
  currentStep = 0;
  stepList[currentStep].classList.add("active");
  nextBtn.disabled = false;
  startBtn.disabled = true;
  updateProgress();
};

nextBtn.onclick = function() {
  if (currentStep >= 0 && currentStep < stepList.length - 1) {
    stepList[currentStep].classList.remove("active");
    currentStep++;
    stepList[currentStep].classList.add("active");
    updateProgress();
  } else {
    nextBtn.disabled = true;
    nextBtn.innerText = "Done 🎉";
  }
};

