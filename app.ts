import helmet from "helmet";
import express, { Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port: number = 3036;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the static file serving
app.use('/Stylesheets', express.static(path.join(__dirname, 'Public', 'Stylesheets')));
app.use('/Fonts', express.static(path.join(__dirname, 'Public', 'Fonts')));
// Shows static image files from the image upload folder
app.use("/Images", express.static(path.join(__dirname, "Media")));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'Views'));

app.get("/", (_req: Request, res: Response) => {
    res.render("DK/home");
});


// TODO: SET UP 404 ROUTE

app.listen(port, () => {
    console.log("SWWW Website - Running");
});