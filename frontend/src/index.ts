import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our API of policies!');
});

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
