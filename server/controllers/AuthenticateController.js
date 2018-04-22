var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../schema/userSchema');

router.use(bodyParser.json());

router.post('/', function (req, res) {
  User.findOne({
    name: req.body.name
  }, (err, user) => {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(500).send("No user found");
    res.status(200).send(user);
  });
});

module.exports = router;