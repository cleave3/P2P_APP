import express, { json } from "express";
import router from "./router";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(json());
app.use(router);

app.listen(PORT, () => console.log(`APP is running on ${PORT}`));