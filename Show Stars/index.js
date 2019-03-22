console.log(showStars(10));

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let printStar = "";
    for (let i = 0; i < row; i++) printStar += "*";
    console.log(printStar);
  }
}
