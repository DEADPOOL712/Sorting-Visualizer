// Bubble sort algorithem
async function bubble() {
  // disableAll();
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].style.background = "blue";
        bars[j + 1].style.background = "blue";
        await waitforme(delay);
        swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "cyan";
      bars[j + 1].style.background = "cyan";
    }
    bars[bars.length - 1 - i].style.background = "#16ff16";
  }
  bars[0].style.background = "#16ff16";
  // enableAll();
}

// bubble sort event listener

sortingBtn[0].addEventListener("click", bubble);
