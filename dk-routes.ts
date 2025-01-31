import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.render("DK/home");
});

router.get("/cases", (_req: Request, res: Response) => {
    res.render("DK/cases");
});

export default router;