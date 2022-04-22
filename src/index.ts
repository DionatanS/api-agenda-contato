import routers from './routers/contatos'
import mongoConnect from './database';
import cors from 'cors'
import express, { Express, Request, Response, Router } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoConnect();
  routers(app);
})