import * as functions from "firebase-functions";
import App from "./app";

export const apiV1 = functions.https.onRequest(App);

// lock game
// export const lockGame = functions.pubsub.schedule('30 18 * * *').onRun( () => {

// })

// Run Proccesses
// Find the winner for current games
// set default game data
// Reset prize pool if a winner condition is met
// Notify all users

// export const runProccesses = functions.pubsub.schedule('30 21 * * *').onRun()

// unlock Game
// export const unlockGame = functions.pubsub.schedule('0 3 * * *').onRun()
