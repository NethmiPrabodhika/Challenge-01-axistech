const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

/* Creating an instance of express. */
const app = express();
/* Allowing the server to accept requests from the client. */
app.use(cors());

app.use(bodyParser.json());

/*Set up routes*/
const userRoutes = require('./Routes/Package.routes');
app.use('/npm-package', userRoutes);

/* Setting the port to 8000. */
const PORT = 8000;
/* Starting the server on the port 8000. */
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})