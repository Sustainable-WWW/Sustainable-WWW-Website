import helmet from "helmet";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

function createLocalizedApp(languageRoutes: express.Router, htmlLang: string, headerIncludeStr: string, footerIncludeStr: string, domainEnding: string): express.Express {
    const app = express();
    
    // Security middleware
    app.use(helmet({
        contentSecurityPolicy: false,
        hidePoweredBy: true
    }));
    app.use(helmet.frameguard({ action: "deny" }));
    app.use(helmet.xssFilter());
    
    // Request parsing
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    // Static assets
    app.use('/Stylesheets', express.static(path.join(__dirname, 'Public', 'Stylesheets')));
    app.use('/Scripts', express.static(path.join(__dirname, 'Public', 'JavaScript')));
    app.use('/Fonts', express.static(path.join(__dirname, 'Public', 'Fonts')));
    app.use("/Images", express.static(path.join(__dirname, "Media")));
    
    // View engine
    app.set("view engine", "ejs");
    app.set('views', path.join(__dirname, 'Views'));
    
    // Language-specific routes
    app.use("/", languageRoutes);
    
    // Centralized 404 handling
    app.use((_req, res) => res.status(404).render("404", { 
        htmlLang: htmlLang,
        headerIncludeStr: headerIncludeStr,
        footerIncludeStr: footerIncludeStr,
        domainEnding: domainEnding
    }));
    
    return app;
}

import en_routes from "./en-routes";
import se_routes from "./se-routes";
import dk_routes from "./dk-routes";

const enApp = createLocalizedApp(en_routes, "en", "./Partials/EN/Header.ejs", "./Partials/EN/Footer.ejs", ".com");
const seApp = createLocalizedApp(se_routes, "sv", "./Partials/SE/Header.ejs", "./Partials/SE/Footer.ejs", ".se");
const dkApp = createLocalizedApp(dk_routes, "da-DK", "./Partials/DK/Header.ejs", "./Partials/DK/Footer.ejs", ".dk");

enApp.listen(1001, () => 
    console.log("English server: http://192.168.50.34:1001"));
seApp.listen(1002, () => 
    console.log("Swedish server: http://192.168.50.34:1002"));
dkApp.listen(1003, () => 
    console.log("Danish server: http://192.168.50.34:1003"));