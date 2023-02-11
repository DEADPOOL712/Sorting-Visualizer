async function selectionSort() {
  disableButton();
  for (let i = 0; i < bars.length; i++) {
    let lowest = i;
    bars[i].style.background = "red";
    for (let j = i + 1; j < bars.length; j++) {
      if (
        parseInt(bars[j].style.height) < parseInt(bars[lowest].style.height)
      ) {
        bars[j].style.background = "#3C4048";
        await waitforme(delay);
        bars[j].style.background = "#c6c6c6";
        lowest = j;
      }
    }
    if (lowest !== i) {
      swap(bars[i], bars[lowest]);
    }
    bars[i].style.background = "#4CD3C2";
  }
  newArrayBtn.disabled = false;
}
sortingBtn[2].addEventListener("click", selectionSort);
