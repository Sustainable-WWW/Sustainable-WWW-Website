import express from "express";
const router = express.Router();

router.get("/", (_req, res) => res.render("SE/hem"));
router.get("/om", (_req, res) => res.render("SE/om"));
router.get("/kontakt", (_req, res) => res.render("SE/kontakt"));
router.get("/lediga-tjanster", (_req, res) => res.render("SE/lediga_tjanster"));
router.get("/cookies-och-integritetspolitik", (_req, res) => res.render("SE/cookies_och_integritetspolitik"));
router.get("/tjanster", (_req, res) => res.render("SE/tjanster"));
router.get("/tjanster/webbdesign", (_req, res) => res.render("SE/webbdesign"));
router.get("/tjanster/webbutveckling", (_req, res) => res.render("SE/webbutveckling"));
router.get("/tjanster/analys-och-optimering", (_req, res) => res.render("SE/analys_och_optimering"));
router.get("/tjanster/hosting", (_req, res) => res.render("SE/hosting"));
router.get("/sustainable-web-design-in-20-lessons", (_req, res) => res.render("SE/sustainable_web_design_in_20_lessons"));

router.get("/fallstudier", (_req, res) => res.render("SE/cases"));

// Dynamic routing for case studies
router.get("/fallstudier/:slug", (req, res) => 
    res.render(`SE/CaseStudies/${req.params.slug.replace(/-/g, "_")}`)
);

router.get("/artiklar", (_req, res) => res.render("SE/articles"));

// Dynamic routing for blogposts
router.get("/artiklar/:slug", (req, res) => 
    res.render(`SE/Articles/${req.params.slug.replace(/-/g, "_")}`)
);

export default router;