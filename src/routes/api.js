
const express = require('express');
const { getUserStatus } = require('../bot/bot');

const router = express.Router();

router.get('/status', (req, res) => {
    const statusData = getUserStatus();
    res.json(statusData);
});

module.exports = router;
