const express = require('express');
const  {getRequestedPackages}  = require('../Controller/PackageController');

const router = express.Router();

router.get("/get-package",getRequestedPackages)

module.exports = router;