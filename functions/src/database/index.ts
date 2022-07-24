/* tslint:disable no-var-requires */
import * as admin from "firebase-admin";

// const serviceAccount = require("../credentials/serviceAccountKey.json");
import serviceAccount = require("../credentials/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lotto-48a43-default-rtdb.europe-west1.firebasedatabase.app",
});

export const FireStore = admin.firestore();
