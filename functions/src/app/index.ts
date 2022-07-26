import express from "express";
import HomeController from "./controller/HomeController.1";
import UsersController from "./controller/UsersController";

const App = express();
App.get("/", HomeController);
App.post("/users", UsersController);

export default App;
