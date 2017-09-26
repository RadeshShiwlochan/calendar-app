const express = require('express');
let router = express.Router();

router.get('/day', (req, res) => {
	res.render('day');
});

module.exports = router;