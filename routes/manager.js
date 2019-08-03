var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
    res.render('manager', { title: ' MANAGER SECTION/Cachorros Esports' });
});

module.exports = router;