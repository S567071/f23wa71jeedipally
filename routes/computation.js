var express = require('express');
var router = express.Router();

/* GET computation listing. */
router.get('/', function (req, res, next) {
    randomValue = Math.random() * 10;
    result = Math.log(randamValue);

    res.send(`Log function is appiled ${randamValue} value is ${result}`);
});

module.exports = router;

let  randamValue, result=0;