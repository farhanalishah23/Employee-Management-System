const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

require('./Models/db');
app.use(cors());
const EmployeeRoutes = require('./Routes/routes')

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Server is running.")
})
app.use(bodyParser.json())

app.use('/api/employess', EmployeeRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

