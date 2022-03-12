import express from "express";
import bodyParser from 'body-parser'
import routeSetup from "./src/config/routes.js";
import dbConnection from './src/model/db.js'

const app = express();
const port = 4500

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

dbConnection()

routeSetup(app)











app.listen(port, () => console.log(`listening on port - ${port}`));