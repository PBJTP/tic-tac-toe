console.log('hello');

// const player = ()

const gameboard = (() => {
    let board = [
        "","","",
        "","","",
        "","",""
    ];
    return {board};
})();

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

    console.log(formData);
    console.log(data);
});

const startGame = (data) => {
    //initialize game variables

    //add event listeners to the gameboard
}