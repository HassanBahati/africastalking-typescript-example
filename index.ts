import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`hello, world`)
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});