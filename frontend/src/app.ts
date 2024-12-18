import express, { Request, Response } from 'express';
import apiRoutes from './routes/index';
import { myDataSource } from './app-data-source';
import { PolicyController } from './controllers/policy.controller';
import { Policy } from './models/entities/policy.entity';
import { TYPES } from './types';
import { container } from './inversify.config';


// console.log(apiRoutes)
// CONTAINER
// https://keyyuki.medium.com/building-maintainable-and-scalable-express-applications-with-clean-architecture-a9d4609886c3

// export const createApp = () => {


const app = express();
const PORT = 3000;

console.log("Container: ",container.isBound(TYPES.PolicyController));

app.use(express.json());
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

