// Bubble sort algorithem
async function bubble() {
  disableButton();
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].style.background = "#3C4048";
        bars[j + 1].style.background = "#3C4048";
        await waitforme(delay);
        swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "#c6c6c6";
      bars[j + 1].style.background = "#c6c6c6";
    }
    bars[bars.length - 1 - i].style.background = "#4CD3C2";
  }
  bars[0].style.background = "#4CD3C2";
  newArrayBtn.disabled = false;
}

// bubble sort event listener

sortingBtn[0].addEventListener("click", bubble);
