import express from "express";

const app = express();
const port = 4500

app.get('/', (req, res) => res.send(`Node and Express running on port --> ${port}`))











app.listen(port, () => console.log(`listening on port - ${port}`));