import * as express from "express";
import HomeController from "./controller/HomeController";

const App = express();
App.get('/', HomeController)

export default App;
