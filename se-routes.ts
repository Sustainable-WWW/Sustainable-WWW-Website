import express from "express";
const router = express.Router();

router.get("/", (_req, res) => res.render("SE/home"));
router.get("/om", (_req, res) => res.render("SE/about"));
router.get("/kontakt", (_req, res) => res.render("SE/contact"));
router.get("/lediga-tjanster", (_req, res) => res.render("SE/positions"));
router.get("/cookies-och-integritetspolicy", (_req, res) => res.render("SE/cookies_and_privacy_policy"));
router.get("/tjanster", (_req, res) => res.render("SE/services"));
router.get("/tjanster/webdesign", (_req, res) => res.render("SE/webdesign"));
router.get("/tjanster/webdevelopment", (_req, res) => res.render("SE/webdevelopment"));
router.get("/tjanster/analysis-and-optimization", (_req, res) => res.render("SE/analysis_and_optimization"));
router.get("/tjanster/hosting", (_req, res) => res.render("SE/hosting"));
router.get("/sustainable-web-design-in-20-lessons", (_req, res) => res.render("SE/sustainable_web_design_in_20_lessons"));

router.get("/cases", (_req, res) => res.render("SE/cases"));

// Dynamic routing for case studies
router.get("/cases/:slug", (req, res) => 
    res.render(`SE/CaseStudies/${req.params.slug.replace(/-/g, "_")}`)
);

router.get("/artiklar", (_req, res) => res.render("SE/articles"));

// Dynamic routing for blogposts
router.get("/artiklar/:slug", (req, res) => 
    res.render(`SE/Articles/${req.params.slug.replace(/-/g, "_")}`)
);

export default router;