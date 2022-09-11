const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./Routes/PackageRoutes');
app.use('/npm-package',userRoutes);

const PORT = 8000;
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})