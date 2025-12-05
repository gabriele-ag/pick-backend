import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routers/games.js"
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.static("public"))
app.use(cors({ origin: process.env.FE_URL }));

app.use("/games", router);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server di Pick in ascolto sulla porta ${port}`)
});