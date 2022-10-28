import { Request, Response, Application, express } from "express";
//const express = require("express");
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/status", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}...`);
});
