import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get('/api/v1/test', (req: Request, res: Response) => {
  res.status(200).send('Server is running!');
})

export default app