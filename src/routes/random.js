import { Router } from "express";
import { fork } from "child_process";

const randomRouter = Router();

randomRouter.get("/", (req, res) => {
    let { quant } = req.query;
    const child = fork("./src/fork/child.js");
    child.send(quant);
    child.on("message", (random) => {
        console.log(random);
        res.send(random);
    });
});

export default randomRouter;