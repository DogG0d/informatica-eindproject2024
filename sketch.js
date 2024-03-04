const gameWidth = 960;
const gameHeight = 540;
// const sideBarWidth = 200;

let canvas;
let assetBackgroundMainMenu, bgGameAsset, bgGamePausedAsset, bgGameOverAsset, bgGameWonAsset;
let assetButtonStart, settingsButtonAsset;

// let sprite;

let gameState = 'mainMenu';
let gameStage = 'first';
let points = 0;
let score = 0;
let alive = true;
let level = 1;

let levels = {}; // Refer to levels.js

function preload() {
    // Background assets
    assetBackgroundMainMenu = loadImage("assets/background/mainMenu.jpg");
    // bgGameAsset = loadImage("assets/background/game.png");
    // bgGamePausedAsset = loadImage("assets/background/gamePaused.png");
    // bgGameOverAsset = loadImage("assets/background/gameOver.png");
    // bgGameWonAsset = loadImage("assets/background/gameWon.png");

    // Button assets
    assetButtonStart = loadImage("assets/button/start.jpg");

    // HUD assets

    // Levels
    // levels = loadJSON('levels.json');
}

function setup() {
    canvas = new Canvas(gameWidth, gameHeight, "fullscreen");
    // Initial setup
    setupMenu();
}

function draw() {
    switch (gameState) {
        case "mainMenu":
            drawMenu();
            break;
        case "game":
            drawGame()
            break;
        case "gamePaused":
            // Draw the game
            break;
        case "gameOver":
            // Draw the game
            break;
        case "gameWon":
            // Draw the game
            break;
    }
}