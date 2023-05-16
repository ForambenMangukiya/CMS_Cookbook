const express = require('express');
const cors = require('cors')
const { Pool } = require('pg');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
const pool = new Pool() 

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    pool.query("SELECT * FROM recipes;")
        .then((data) => res.send(data.rows))
        .catch((e) => res.sendStatus(500))
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})