class GameModel {
  constructor() {
    this.blocks = Array.from({ length: 12 }, (_, i) => ({ id: i, status: 'empty' }));
    this.score = 0;
    this.timeLeft = 30;
    this.moleInterval = null;
    this.snakeInterval = null;
    this.isGameOver = false;
  }

  reset() {
    this.blocks = this.blocks.map(block => ({ ...block, status: 'empty' }));
    this.score = 0;
    this.timeLeft = 30;
    this.isGameOver = false;
  }

  spawnMole() {
    const emptyBlocks = this.blocks.filter(block => block.status === 'empty');
    if (emptyBlocks.length > 0 && this.blocks.filter(block => block.status === 'mole').length < 3) {
      const randomBlock = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
      randomBlock.status = 'mole';
      setTimeout(() => {
        if (randomBlock.status === 'mole') {
          randomBlock.status = 'empty';
        }
      }, 2000); // Mole disappears after 2 seconds
    }
  }

  spawnSnake() {
    const randomBlock = this.blocks[Math.floor(Math.random() * this.blocks.length)];
    randomBlock.status = 'snake';
    setTimeout(() => {
      if (randomBlock.status === 'snake') {
        randomBlock.status = 'empty';
      }
    }, 2000); // Snake disappears after 2 seconds
  }

  handleClick(blockId) {
    const block = this.blocks.find(b => b.id === blockId);
    if (block.status === 'mole') {
      this.score += 1;
      block.status = 'empty';
    } else if (block.status === 'snake') {
      this.isGameOver = true;
      this.blocks.forEach(b => b.status = 'snake'); // Show snakes everywhere
    }
  }
}

class GameController {
  constructor(model) {
    this.model = model;
    this.startButton = document.getElementById('start-button');
    this.gameBoard = document.querySelector('.game-board');
    this.scoreDisplay = document.getElementById('score');
    this.timerDisplay = document.getElementById('timer');
    this.startButton.addEventListener('click', () => this.startGame());
    this.renderBlocks();
  }

  renderBlocks() {
    this.gameBoard.innerHTML = ''; // Clear existing blocks
    this.model.blocks.forEach(block => {
      const blockElement = document.createElement('div');
      blockElement.classList.add('block');
      blockElement.dataset.id = block.id;
      blockElement.addEventListener('click', () => this.handleBlockClick(block.id));
      this.gameBoard.appendChild(blockElement);
    });
  }

  updateView() {
    this.model.blocks.forEach(block => {
      const blockElement = document.querySelector(`.block[data-id="${block.id}"]`);
      blockElement.innerHTML = '';
      if (block.status === 'mole') {
        blockElement.innerHTML = '<img src="assets/mole.png" alt="Mole">';
      } else if (block.status === 'snake') {
        blockElement.innerHTML = '<img src="assets/snake.png" alt="Snake">';
      }
    });
    this.scoreDisplay.textContent = this.model.score;
    this.timerDisplay.textContent = this.model.timeLeft;
  }

  handleBlockClick(blockId) {
    if (!this.model.isGameOver) {
      this.model.handleClick(blockId);
      this.updateView();
      if (this.model.isGameOver) {
        this.endGame();
      }
    }
  }

  startGame() {
    this.model.reset();
    this.updateView();
    this.model.moleInterval = setInterval(() => {
      this.model.spawnMole();
      this.updateView();
    }, 1000);
    this.model.snakeInterval = setInterval(() => {
      this.model.spawnSnake();
      this.updateView();
    }, 2000);
    this.startTimer();
  }

  startTimer() {
    const timerInterval = setInterval(() => {
      this.model.timeLeft -= 1;
      this.timerDisplay.textContent = this.model.timeLeft;
      if (this.model.timeLeft <= 0 || this.model.isGameOver) {
        clearInterval(timerInterval);
        this.endGame();
      }
    }, 1000);
  }

  endGame() {
    clearInterval(this.model.moleInterval);
    clearInterval(this.model.snakeInterval);
    alert(this.model.isGameOver ? "You clicked a snake! Game Over!" : "Time is Over!");
  }
}

const model = new GameModel();
const controller = new GameController(model);