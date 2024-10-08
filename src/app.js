import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

const app = express();
const PORT = process.env.LOCAL_PORT;

// config moteur de template
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/view"));
// config dossier statique
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));


// middleware pour le reouter
app.use(router);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));