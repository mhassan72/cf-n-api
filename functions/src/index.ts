import * as functions from "firebase-functions";
import App from "./app";
export const Api_V1 = functions.https.onRequest(App);

