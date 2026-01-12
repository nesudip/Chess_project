
const board = document.getElementById("chessboard");

const pieces = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];


let selectedSquare = null;

function createBoard() {
    board.innerHTML = "";

    pieces.forEach((piece, index) => {
        const square = document.createElement("div");
        square.classList.add("square");

        const row = Math.floor(index / 8);
        if ((row + index) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }

        square.textContent = piece;
        square.dataset.index = index;

        square.addEventListener("click", () => handleMove(square));

        board.appendChild(square);
    });
}

function handleMove(square) {
    if (selectedSquare === null) {
        if (square.textContent !== "") {
            selectedSquare = square;
            square.classList.add("selected");
        }
    } else {
        pieces[square.dataset.index] =
            pieces[selectedSquare.dataset.index];
        pieces[selectedSquare.dataset.index] = "";

        selectedSquare.classList.remove("selected");
        selectedSquare = null;
        createBoard();
    }
}

createBoard();
