import express, { Request, Response } from 'express';
import apiRoutes from './routes/index';
import { container } from './container.config';
import { scopePerRequest } from 'awilix-express';
import { myDataSource } from './app-data-source';

// console.log(apiRoutes)
// CONTAINER
// https://keyyuki.medium.com/building-maintainable-and-scalable-express-applications-with-clean-architecture-a9d4609886c3

const app = express();
const PORT = 3000;


myDataSource
  .initialize()
  .then(() => {
    console.log('Data source initialized');
  })
  .catch((error) => {
    console.error('Error initializing data source', error);
  });


app.use(express.json());
app.use(scopePerRequest(container));
app.use('/api/v1', apiRoutes);

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Welcome to our API of policies!');
});

app.post('/api/v1/policy', (req: Request, res: Response) => {

})


const server = app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
// }

