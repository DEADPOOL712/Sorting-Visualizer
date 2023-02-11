async function insertionSort() {
  disableButton();
  let i, key, j;
  for (i = 1; i < bars.length; i++) {
    key = bars[i].style.height;
    bars[i].style.background = "red";
    j = i - 1;
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      bars[j].style.background = "#3C4048";
      await waitforme(delay);
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.background = "#4CD3C2";
      j = j - 1;
    }
    bars[j + 1].style.height = key;
  }
  bars[bars.length - 1].style.background = "#4CD3C2";
  newArrayBtn.disabled = false;
}
sortingBtn[1].addEventListener("click", insertionSort);
