import * as admin from "firebase-admin";
import * as serviceAccount from "../../credentials/serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lotto-48a43-default-rtdb.europe-west1.firebasedatabase.app",
});
