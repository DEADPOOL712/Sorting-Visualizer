async function selectionSort() {
  for (let i = 0; i < bars.length; i++) {
    let lowest = i;
    bars[i].style.background = "red";
    for (let j = i + 1; j < bars.length; j++) {
      if (
        parseInt(bars[j].style.height) < parseInt(bars[lowest].style.height)
      ) {
        bars[j].style.background = "blue";
        await waitforme(delay);
        bars[j].style.background = "cyan";
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      // ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      swap(bars[i], bars[lowest]);
    }
    bars[i].style.background = "#16ff16";
  }
}
sortingBtn[2].addEventListener("click", selectionSort);
