import express from "express";
import HomeController from "./controller/HomeController";
import UsersController from "./controller/UsersController";

const App = express();
App.get("/", HomeController);
App.post("/users", UsersController);

export default App;
