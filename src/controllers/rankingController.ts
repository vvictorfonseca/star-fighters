import { Request, Response } from "express";
import rankingRepository from "../repositories/rankingRepository.js";

async function getRanking(req: Request, res: Response) {

    const result = await rankingRepository.getRanking()
    res.send(result.rows)
}

export default getRanking;