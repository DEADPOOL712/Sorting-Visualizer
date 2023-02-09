// declaration and element selection
const bars = document.querySelectorAll(".main-container-right div");
const newArrayBtn = document.querySelector(".new-btn");
const speedRange = document.querySelector(".speed");
const sortingBtn = document.querySelectorAll(".sorting-btn");
let delay = 160;
let temp;

// generating random height of bars
function generateBars() {
  bars.forEach(function (bar) {
    const randomHeight = Math.floor(Math.random() * 550) + 5;
    bar.style.height = `${randomHeight}px`;
    bar.style.background = "cyan";
  });
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

// disable buttons
function disableAll() {
  newArrayBtn.removeEventListener("click", generateBars);
  newArrayBtn.style.boxShadow = "none";
  newArrayBtn.style.color = "rgb(116,116,116,0.5)";
  sortingBtn.forEach((btn) => {
    btn.style.boxShadow = "none";
    btn.style.color = "rgb(116,116,116,0.5)";
  });
  sortingBtn[0].removeEventListener("click", bubble);
}
// enable buttons
function enableAll() {
  newArrayBtn.addEventListener("click", generateBars);
  newArrayBtn.style.color = "black";
  newArrayBtn.style.boxShadow = "1px 1px 3px red";
  sortingBtn.forEach((btn) => {
    btn.style.boxShadow = "1px 1px 3px green";
    btn.style.color = "black";
  });
  sortingBtn[0].addEventListener("click", bubble);
}

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
