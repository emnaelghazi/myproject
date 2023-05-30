const player1 = prompt("Enter name for Player 1 (you will be X)");
const player2 = prompt("Enter name for Player 2 (you will be O)");
const playerText = document.getElementById('playerText');
const restartBtn = document.getElementById('restartBtn');
const boxes = Array.from(document.getElementsByClassName('box'));
let board = [
    "", "", "",
    "", "", "",
    "", "", ""];

let currentPlayer = "X";
playerText.innerText = `${player1}'s turn`;
const handleClick = (e) => {
    const id = e.target.id;
    if (board[id] !== "") return;
    board[id] = currentPlayer;
    e.target.innerText = currentPlayer === "X" ? player1[0] : player2[0];
    e.target.style.color = currentPlayer === "X" ? "#EE8906" : "#c286eb";

    if (checkWin()) {
        playerText.innerText = `${currentPlayer === "X" ? player1 : player2} wins!`;
        endGame();
        return;}

    if (board.every(cell => cell !== "")) {
        playerText.innerText = "Tie game!";
        endGame();
        return;}

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerText.innerText = `${currentPlayer === "X" ? player1 : player2}'s turn`;}

const endGame = () => {
    boxes.forEach(box => box.removeEventListener('click', handleClick));
    restartBtn.style.display = 'block';}

const restartGame = () => {
    board = [
        "", "", "",
        "", "", "",
        "", "", "" ];

    currentPlayer = "X";
    playerText.innerText = `${player1}'s turn`;
    boxes.forEach(box => {
        box.innerText = "";
        box.style.color = "#EE8906";
        box.addEventListener('click', handleClick, { once: true });});

    restartBtn.style.display = 'none';}

const checkWin = () => {
    return (
        checkRow(0, 1, 2) ||
        checkRow(3, 4, 5) ||
        checkRow(6, 7, 8) ||
        checkRow(0, 3, 6) ||
        checkRow(1, 4, 7) ||
        checkRow(2, 5, 8) ||
        checkRow(0, 4, 8) ||
        checkRow(2, 4, 6));}

const checkRow = (a, b, c) => {
    return (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[b] === board[c]);}

boxes.forEach(box => box.addEventListener('click', handleClick, { once: true }));
restartBtn.addEventListener('click', restartGame);
