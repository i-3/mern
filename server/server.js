import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(
//   cors({
//     origin: '*',
//     credentials: true,
//     methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     exposedHeaders: ['Content-Type'],
//   })
// );

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET',
//     'POST',
//     'PATCH',
//     'DELETE'
//   );
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(express.json());
app.use('/record', records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// import express, { Express, Request, Response } from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const uri: string =
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/your-app';

// (async () => {
//   try {
//     await mongoose.connect(uri);
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error(error);
//   }
// })();

// app.get('/health', (_req: Request, res: Response) => {
//   res.status(200).send('Server is running');
// });

// const PORT: string | number = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT: ${PORT}`);
// });
