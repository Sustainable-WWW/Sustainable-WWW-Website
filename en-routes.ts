import express from "express";
const router = express.Router();

router.get("/", (_req, res) => res.render("EN/home"));
router.get("/about", (_req, res) => res.render("EN/about"));
router.get("/contact", (_req, res) => res.render("EN/contact"));
router.get("/available-positions", (_req, res) => res.render("EN/positions"));
router.get("/cookies-and-privacy-policy", (_req, res) => res.render("EN/cookies_and_privacy_policy"));
router.get("/services", (_req, res) => res.render("EN/services"));
router.get("/services/webdesign", (_req, res) => res.render("EN/webdesign"));
router.get("/services/webdevelopment", (_req, res) => res.render("EN/webdevelopment"));
router.get("/services/analysis-and-optimization", (_req, res) => res.render("EN/analysis_and_optimization"));
router.get("/services/hosting", (_req, res) => res.render("EN/hosting"));
router.get("/sustainable-web-design-in-20-lessons", (_req, res) => res.render("EN/sustainable_web_design_in_20_lessons"));

// PERMANENTLY REDIRECTING TO OUR-WORK INSTEAD
//router.get("/cases", (_req, res) => res.render("EN/cases"));

/*router.get("/cases/:slug", (req, res) => 
    res.render(`EN/CaseStudies/${req.params.slug.replace(/-/g, "_")}`)
);*/

// PERMANENTLY REDIRECTING TO OUR WORK
router.get("/cases", (_req, res) => res.redirect(301, "/our-work"));

// PERMANENTLY REDIRECTING TO OUR WORK
router.get("/cases/:slug", (req, res) => 
    res.redirect(301, `/our-work/${req.params.slug}`)
);

router.get("/our-work", (_req, res) => res.render("EN/our_work"));

router.get("/our-work/:slug", (req, res) => 
    res.render(`EN/CaseStudies/${req.params.slug.replace(/-/g, "_")}`)
)

router.get("/articles", (_req, res) => res.render("EN/articles"));

// Dynamic routing for blogposts
router.get("/articles/:slug", (req, res) => 
    res.render(`EN/Articles/${req.params.slug.replace(/-/g, "_")}`)
);

export default router;