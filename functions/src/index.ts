import * as functions from "firebase-functions";
import App from "./app";

export const apiV1 = functions.https.onRequest(App);

// Tickets Firestore trigger
// export const proccessTicket = functions.firestore
//     .document("tickets")
//     .onWrite(async (change, context) => {
//       return;
//     });
