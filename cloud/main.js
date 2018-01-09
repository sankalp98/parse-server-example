
Parse.Cloud.define('hello', function(req, res) {
  res.success('Teri maa ki chuth');
});

Parse.Cloud.define('incNumOfFollowers', function(req, res) {
  res.success('incNumOfFollowers is called');
});

Parse.Cloud.define('decNumOfFollowers', function(req, res) {
  res.success('decNumOfFollowers is called');
});
