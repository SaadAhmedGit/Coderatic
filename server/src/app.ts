import express from 'express';
import cors from "cors";

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

type Request = express.Request;
type Response = express.Response;

app.get("/server", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Server is running on port 8081");
});
