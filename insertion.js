async function insertionSort() {
  let i, key, j;
  for (i = 1; i < bars.length; i++) {
    key = bars[i].style.height;
    bars[i].style.background = "red";
    j = i - 1;
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      bars[j].style.background = "blue";
      await waitforme(delay);
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.background = "#16ff16";
      j = j - 1;
    }
    bars[j + 1].style.height = key;
  }
  bars[bars.length - 1].style.background = "#16ff16";
}
sortingBtn[1].addEventListener("click", insertionSort);
