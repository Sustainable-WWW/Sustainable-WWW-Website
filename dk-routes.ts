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

router.get("/ledige-stillinger", (_req: Request, res: Response) => {
    res.render("DK/stillinger");
});

router.get("/cookies-og-privatlivspolitik", (_req: Request, res: Response) => {
    res.render("DK/cookie_og_privatlivspolitik");
});

router.get("/artikler", (_req: Request, res: Response) => {
    res.render("DK/artikler");
});

// BLOG POSTS
router.get("/artikler/hvad-gor-en-hjemmeside-baeredygtig", (_req: Request, res: Response) => {
    res.render("DK/Articles/hvad_goer_en_hjemmeside_baeredygtig");
});

router.get("/artikler/hvorfor-er-baeredygtige-hjemmesider-fremtiden", (_req: Request, res: Response) => {
    res.render("DK/Articles/hvorfor_er_baeredygtige_hjemmesider_fremtiden");
});

router.get("/artikler/hvordan-en-baeredygtig-hjemmeside-styrker-dit-brand", (_req: Request, res: Response) => {
    res.render("DK/Articles/hvordan_en_baeredygtig_hjemmeside_styrker_dit_brand");
});

router.get("/artikler/er-din-virksomheds-hjemmeside-en-klimasynder", (_req: Request, res: Response) => {
    res.render("DK/Articles/er_din_virksomheds_hjemmeside_en_klimasynder");
});

export default router;