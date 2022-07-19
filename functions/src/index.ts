import * as functions from "firebase-functions";
import {Response, Request} from "firebase-functions";

export const apiV1 = functions.https.onRequest(App);
/**
 * @param {Request} req returns request body
 * @param {Response} res returns response body
*/
function App(req: Request, res: Response) {
  functions.logger.info("Hello world", {structuredData: true});
  res.send("Api Ready to go!");
}
