import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import smsRoutes from "./routes/smsRouter"

dotenv.config();

const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/sms", smsRoutes);

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).send(`hello, world`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
