// first step we need to atach event listeners to the form to get user data

//attach event listeners to gamebox

//intialize game

//check which gamemmode we are playing

//set win conditions

//determine current player

//after each move check win conditions set other player if no win

//human vs human

//human easy ai

//human impossible

const form = document.querySelector('#userData');

form.addEventListener('submit', (event) => {
    //prevents refresh
    event.preventDefault();

    //grab form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    startGame(data);
});

const startGame = (data) => {
    //initialize game variables
    data.player1 = "X";
    data.player2 = "O";
    data.board = [0,1,2,3,4,5,6,7,8];
    data.gameOver = false;
    data.round = 0;
    data.currentPlayer = data.player1;
    console.log(data);

    //add event listeners to the gameboard
    const addBoardListeners = (e) => {
        document.querySelectorAll('.gametile').forEach(x =>{
        x.addEventListener('click', (e) => {
            // make players move using data object
            playMove(e.target, data);
        });
        });
    };
    addBoardListeners(data);
};

const playMove = (gametile, data) => {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    //check if game is over
    if(data.gameOver || data.round >= 9) {
        return;
    };

    // //check if tile is full
    if (data.board[gametile.id] === "X" || data.board[gametile.id] === "O") {
        return;
    }

    //Chnage data.board value to player piece. update HTML
    data.board[gametile.id] = data.currentPlayer;
    gametile.textContent = data.currentPlayer;
    
    // Switch Player. SWITCH TO TERNARY WHEN YOU LOOK UP HOW
    if (data.currentPlayer === data.player1) {
        data.currentPlayer = data.player2
    } else {
        data.currentPlayer = data.player1
    };

    data.round++

    data.board

    winConditions.forEach(gametile => {
        if (data.board[gametile[0]] === data.board[gametile[1]]) {
            console.log('WORKED');
        }
        console.log(data.board);
        console.log(gametile)
    })
    //USE THE DIV IDS!!
    console.log(gametile,data);
    console.log(data.round);
}