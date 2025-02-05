import express from "express";
const router = express.Router();

router.get("/", (_req, res) => res.render("DK/home"));
router.get("/om-os", (_req, res) => res.render("DK/om_os"));
router.get("/kontakt", (_req, res) => res.render("DK/kontakt"));
router.get("/ledige-stillinger", (_req, res) => res.render("DK/stillinger"));
router.get("/cookies-og-privatlivspolitik", (_req, res) => res.render("DK/cookie_og_privatlivspolitik"));

router.get("/cases", (_req, res) => res.render("DK/cases"));

router.get("/artikler", (_req, res) => res.render("DK/artikler"));

// Dynamisk routing til blogposts
router.get("/artikler/:slug", (req, res) => 
    res.render(`DK/Articles/${req.params.slug.replace(/-/g, "_")}`)
);

export default router;