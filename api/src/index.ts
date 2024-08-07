import express from 'express';
import { usersRouter } from './routes/users';
import * as mid from './utils/middleware';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors(mid.corsOptions));
app.use(express.json());
app.disable('x-powered-by');

app.use('/users', usersRouter);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(mid.notFound);

app.use(mid.errorServer);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
