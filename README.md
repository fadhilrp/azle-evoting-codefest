# simple_guessing_game

## Overview

The Number Guessing Game Canister is an interactive application that challenges users to guess a randomly generated number between 1 and 100. With a limited number of attempts and a scoring system, players aim to achieve the highest score by making accurate guesses. The game provides feedback on each attempt, guiding players to adjust their guesses until they either correctly identify the number or exhaust their attempts.

## Functions

Here is some functions that work in this app.

1. Function to guess the number (`doGuessNumber`).
   Allows the user to make a guess for the randomly generated number. The game provides feedback on each guess, indicating whether the guess is too high, too low, or correct. The user's score is adjusted based on the number of attempts left.

   ```
   const result = await doGuessNumber("50");
   ```

2. Function to get current score (`getScore`).
   This function enables users to mark the attendance of a student by entering the presence code associated with a specific classroom.

   ```
   const result = await getScore();
   ```

3. Function to game initialization and reset.
   The game is initialized with a randomly generated number between 1 and 100. The reset function can be called to start a new game, resetting the number, attempts, and score.

   - `generateNumber()`
   - `setScoreByAttempt()`
   - `reset()`


## How to Use

You can run this project by running the following command:

1. Clone the repository.
 
    ```
    git clone 
    ```

2. Install the dependencies.

    ```
    npm install
    ```

3. In the first terminal, start the `dfx` server.
   ```
   dfx start
   ```

4. In another terminal, deploy the app to start the web ui.
    ```
    dfx deploy
    ```

5. Open the URL that given from step 4 in your browser. Boom, you can access the presence app!
