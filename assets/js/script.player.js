class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gamesList = [];
  }

  addGame(game) {
    this.gamesList.push(game);
  }

  displayGames() {
    const gamesListElement = document.getElementById("games-list");
    gamesListElement.innerHTML = "";

    this.gamesList.forEach((game, index) => {
      const gameItem = document.createElement("li");
      gameItem.textContent = `${index + 1}. ${game.title}`;
      gamesListElement.appendChild(gameItem);
    });
  }
}

class Game {
  constructor(title) {
    this.title = title;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const addGameButton = document.getElementById("add-game");
  const playerNameInput = document.getElementById("player-name");
  const gamesListElement = document.getElementById("games-list");

  const player1 = new Player("");

  addGameButton.addEventListener("click", () => {
    const gameTitle = prompt("Enter the game title:");
    if (gameTitle) {
      const newGame = new Game(gameTitle);
      player1.addGame(newGame);
      player1.displayGames();
    }
  });

  playerNameInput.addEventListener("input", () => {
    player1.name = playerNameInput.value;
  });
});
