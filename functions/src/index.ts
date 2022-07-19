import * as functions from "firebase-functions";
import App from "./app";
export const apiV1 = functions.https.onRequest(App);

