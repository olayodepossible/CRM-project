import express from "express";
import bodyParser from 'body-parser'
import routeSetup from "./src/config/routes";

const app = express();
const port = 4500

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routeSetup(app)
app.get('/', (req, res) => res.send(`Node and Express running on port --> ${port}`))











app.listen(port, () => console.log(`listening on port - ${port}`));