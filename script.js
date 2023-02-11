// new commnet add

// declaration and element selection
const bars = document.querySelectorAll(".main-container-right div");
const newArrayBtn = document.querySelector(".new-btn");
const speedRange = document.querySelector(".speed");
const sortingBtn = document.querySelectorAll(".sorting-btn");
let delay = 160;
let temp;

// disable button
const disableButton = function () {
  newArrayBtn.disabled = true;
  sortingBtn.forEach((btn) => {
    btn.disabled = true;
  });
};
// enable button
const enableButton = function () {
  sortingBtn.forEach((btn) => {
    btn.disabled = false;
  });
};

// generating random height of bars
function generateBars() {
  bars.forEach(function (bar) {
    const randomHeight = Math.floor(Math.random() * 500) + 50;
    bar.style.height = `${randomHeight}px`;
    bar.style.backgroundColor = "#c6c6c6";
  });
  enableButton();
}
generateBars();

// speed change listening
function changeSpeed() {
  delay = 300 - Number(this.value);
  console.log(delay);
}

// New array click handaling
newArrayBtn.addEventListener("click", generateBars);

// speed handaling
speedRange.addEventListener("change", changeSpeed);
speedRange.addEventListener("mousemove", changeSpeed);

// aysnc function for animation so we can see bars moving
function waitforme(milisec) {
  // this function return promise
  // the resovle is function it will resolve after "milisec"
  return new Promise((resolve) => {
    // settime out of "milisec"
    setTimeout(() => {
      // promise is resolved
      resolve("");
    }, milisec);
  });
}

// to swap two bars for sorting
function swap(ele1, ele2) {
  temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}
