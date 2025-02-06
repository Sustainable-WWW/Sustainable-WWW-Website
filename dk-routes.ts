import express from "express";
const router = express.Router();

router.get("/", (_req, res) => res.render("DK/home"));
router.get("/om-os", (_req, res) => res.render("DK/om_os"));
router.get("/kontakt", (_req, res) => res.render("DK/kontakt"));
router.get("/ledige-stillinger", (_req, res) => res.render("DK/stillinger"));
router.get("/cookies-og-privatlivspolitik", (_req, res) => res.render("DK/cookie_og_privatlivspolitik"));
router.get("/services", (_req, res) => res.render("DK/services"));

router.get("/cases", (_req, res) => res.render("DK/cases"));

// Dynamic routing for case studies
router.get("/cases/:slug", (req, res) => 
    res.render(`DK/CaseStudies/${req.params.slug.replace(/-/g, "_")}`)
);

router.get("/artikler", (_req, res) => res.render("DK/artikler"));

// Dynamic routing for blogposts
router.get("/artikler/:slug", (req, res) => 
    res.render(`DK/Articles/${req.params.slug.replace(/-/g, "_")}`)
);

export default router;