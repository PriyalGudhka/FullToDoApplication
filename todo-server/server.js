import express from 'express';
import cors from 'cors';
import Connection from './database/database.js';
import Routes from './routes/routes.js';

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8081; //Used for defining the port to be used to launch the todo application

Connection(); //Calls the method to check if database is connected

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
