// import { Request, Response } from "express";
// import { battleSchema } from "./../schemas/battleSchema.js";

// function validateBattle(req: Request, res: Response, next: any) {
//     const { firstUser, secondUser } = req.body

//     const { error } = battleSchema.validate(req.body, { abortEarly: false });

//     if (error) {
//         throw {
//             type: "unprocessable_entity",
//             message: error.details.map((error) => error.message),
//         };
//     }

//     next()
// }

// export default validateBattle;