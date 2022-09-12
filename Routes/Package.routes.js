const express = require('express');
const  {getRequestedPackages}  = require('../Controller/PackageController');

const router = express.Router();

/* This is a route handler for the / route. It is used to get package */
router.get("/get-package",getRequestedPackages)

module.exports = router;