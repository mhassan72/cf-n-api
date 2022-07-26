import * as functions from "firebase-functions";
import App from "./app";

import LockGame from "./triggers/LockGame"
import UnLockGame from "./triggers/UnlockGame"

export const apiV1 = functions.https.onRequest(App);

// lock game
export const lockGame = functions.pubsub.schedule('30 18 * * *').onRun(LockGame)

// Run Proccesses
// Find the winner for current games
// set default game data
// Reset prize pool if a winner condition is met
// Notify all users

// export const runProccesses = functions.pubsub.schedule('30 21 * * *').onRun(LockGame)

// unlock Game
export const unlockGame = functions.pubsub.schedule('0 3 * * *').onRun(UnLockGame)
