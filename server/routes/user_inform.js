const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/login', (req, res) => {
    //임시 값
    res.send({ data: 'data' });
});

module.exports = router;
