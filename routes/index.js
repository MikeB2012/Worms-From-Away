
/*
 * GET home page.
 */

var fs = require('fs');

exports.index = function(req, res) {
  res.render('index', { title: 'Worms from Away' });
};

