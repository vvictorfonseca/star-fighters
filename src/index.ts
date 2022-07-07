import cors from "cors";
import express, {json} from "express";

import "./config/setup.js"

import battleRouter from "./Routes/battleRouter.js";
import rankingRouter from "./Routes/rankingRouter.js";
import handleErrors from "./middlewares/handleErrorMiddleware.js";

const app = express();
app.use(cors());
app.use(json());

app.use(battleRouter)
app.use(rankingRouter)
app.use(handleErrors)

const port: number = +process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

export default app;