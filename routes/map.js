var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
    res.render('map', { title: ' MAP SECTION/Cachorros Esports' });
});

module.exports = router;