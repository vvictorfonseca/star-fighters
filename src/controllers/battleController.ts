import { Request, Response } from "express";

import userService from "../services/userService.js";
import  compareStars  from "./../services/fightersService.js"

async function postNewBattle(req: Request, res: Response){
    const { firstUser, secondUser } = req.body

    await userService.verifyUsers(firstUser, secondUser)

    const result = await compareStars(firstUser, secondUser);

    res.send(result)
}

export default postNewBattle;