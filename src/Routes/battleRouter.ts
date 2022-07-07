import { Router } from "express";

import postNewBattle from "./../controllers/battleController.js";
import validateBattle from "../middlewares/battleMiddleware.js";

const battleRouter = Router();

battleRouter.post("/battle", validateBattle, postNewBattle);

export default battleRouter;