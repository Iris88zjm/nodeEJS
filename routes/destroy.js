var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  req.session.destroy();
});


module.exports = router;