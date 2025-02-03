import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.render("EN/home");
});

export default router;