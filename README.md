# Rock_paper_scissors_game
A fun and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript.  The game lets you play against the computer for 10 rounds, keeps track of your score, and stores your highest score even after refreshing the page.

🎮 About the Game

This project was created to practice JavaScript concepts such as:

DOM manipulation
Event listeners
Functions
Conditional statements
Variables and state management
Random number generation
localStorage
User interaction

The game also includes Play Again and Reset Game functionality.

📜 Rules of the Game

The rules are simple:

🪨 Rock beats Scissors
📄 Paper beats Rock
✂️ Scissors beats Paper
Same choices result in a Draw
The game consists of 10 rounds
The player with the higher score at the end wins
Example:
Rock 🪨 vs Scissors ✂️ → You Win!
Rock 🪨 vs Paper 📄 → You Lose!
Rock 🪨 vs Rock 🪨 → Draw!
⭐ High Score

The game keeps track of your highest score using Browser Local Storage.

This means:

Refreshing the page does not erase your high score.
Clicking Play Again does not erase your high score.
Clicking Reset Game permanently clears the saved high score after confirmation.
🎮 Game Controls
Play Again

Starts a new 10-round game.

Current score → Reset
Round count → Reset
High score → Kept
Reset Game

Completely resets the game.

Current score → Reset
Round count → Reset
High score → Reset

A confirmation message appears before the high score is deleted.

🛠️ Technologies Used
HTML5 — Structure of the game
CSS3 — Styling and layout
JavaScript — Game logic and interaction
Local Storage — Saving the high score
✨ Features
🪨 Rock, Paper & Scissors choices
🤖 Random computer choice
🏆 Score tracking
⭐ Persistent high score
🔄 Play Again option
❌ Reset Game option with confirmation
🎨 Interactive UI
📱 Responsive viewport setup
🎯 10-round game system
🤝 Draw detection
📂 Project Structure
Rock-Paper-Scissors/
│
├── index.html
├── Style.css
├── Game.js
├── rock.png
├── paper.png
├── scissors.png
└── README.md
