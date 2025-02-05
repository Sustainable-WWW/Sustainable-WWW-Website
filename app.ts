import helmet from "helmet";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port: number = 3036;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet.hidePoweredBy());
//app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the static file serving
app.use('/Stylesheets', express.static(path.join(__dirname, 'Public', 'Stylesheets')));
app.use('/Scripts', express.static(path.join(__dirname, 'Public', 'JavaScript')));
app.use('/Fonts', express.static(path.join(__dirname, 'Public', 'Fonts')));
// Shows static image files from the image upload folder
app.use("/Images", express.static(path.join(__dirname, "Media")));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'Views'));

// ROUTES
import en_routes from "./en-routes";
import se_routes from "./se-routes";
import dk_routes from "./dk-routes";

app.use("/en", en_routes);
app.use("/se", se_routes);
app.use("/dk", dk_routes);

// 404 route
app.use((_req, res) => res.status(404).render("404"));

app.listen(port, () => {
    console.log("SWWW Website - Running");
});