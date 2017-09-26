const express = require('express');
let router = express.Router();
const helperFunc = require('../helper-func.js');

router.get('/', (req, res) => {
	res.render('month', { day: helperFunc.getCurrDay(), date: helperFunc.getCurrDate(), month: helperFunc.getCurrMonth() });
});

helperFunc.numberSpelling(1);
helperFunc.numberSpelling(2);
helperFunc.numberSpelling(3);
helperFunc.numberSpelling(4);
helperFunc.numberSpelling(5);
helperFunc.numberSpelling(6);
helperFunc.numberSpelling(7);
helperFunc.numberSpelling(8);
helperFunc.numberSpelling(9);
helperFunc.numberSpelling(10);
helperFunc.numberSpelling(11);
helperFunc.numberSpelling(12);
helperFunc.numberSpelling(13);
helperFunc.numberSpelling(14);
helperFunc.numberSpelling(15);
helperFunc.numberSpelling(16);
helperFunc.numberSpelling(17);
helperFunc.numberSpelling(18);
helperFunc.numberSpelling(19);
helperFunc.numberSpelling(20);
helperFunc.numberSpelling(21);
helperFunc.numberSpelling(22);
helperFunc.numberSpelling(23);
helperFunc.numberSpelling(24);
helperFunc.numberSpelling(25);
helperFunc.numberSpelling(26);
helperFunc.numberSpelling(27);
helperFunc.numberSpelling(28);
helperFunc.numberSpelling(29);
helperFunc.numberSpelling(30);
helperFunc.numberSpelling(31);

module.exports = router;