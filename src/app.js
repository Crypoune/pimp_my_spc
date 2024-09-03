import "dotenv/config";
import express from "express";
import path from "path";
import router from "./router/index.routes.js";

const app = express();
const PORT = process.env.LOCAL_PORT;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/view"));

app.use(router);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));