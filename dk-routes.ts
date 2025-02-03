import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.render("DK/home");
});

router.get("/cases", (_req: Request, res: Response) => {
    res.render("DK/cases");
});

router.get("/om-os", (_req: Request, res: Response) => {
    res.render("DK/om_os");
});

router.get("/kontakt", (_req: Request, res: Response) => {
    res.render("DK/kontakt");
});

export default router;