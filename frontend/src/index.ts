import express, { Request, Response } from 'express';
import apiRoutes from './routes';
import { myDataSource } from './app-data-source';

const app = express();
const port = 3000;

myDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!');
})
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

app.use(express.json());
app.use('/api/v1', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our API of policies!');
});

process.on('exit', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});

const server = app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});

