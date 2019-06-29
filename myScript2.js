// Restart Game button
var restart = document.querySelector("#b")

// Grabing all the squares
var squares = document.querySelectorAll("td")

//create a function that clears all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].texContent = " ";
  }
}

restart.addEventListener("click", clearBoard);

//Using this object to loop through the squares
//first create a function

function changeMarker(){
  if (this.addEventListener === " ") {
    this.textContent = "x";
  } else if (this.texContent === "x") {
    this.textContent = "O";
  }else {
    this.textContent = " ";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}
