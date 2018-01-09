
Parse.Cloud.define('hello', function(req, res) {
  res.success('Teri maa ki chuth');
});

Parse.Cloud.define('incNumOfFollowers', function(req, res) {
  res.success('incNumOfFollowers is called');
});

Parse.Cloud.define('decNumOfFollowers', function(req, res) {
  res.success('decNumOfFollowers is called');
});

Parse.Cloud.define('newincNumOfFollowers', function(request, response) {
  var User = Parse.Object.extend('_User');
  var user = new User();
  var currentUser = new User();
  //currentUser.id = request.params.currentId;
  //user.id = request.params.userId;
  
  var query = new Parse.Query(Parse.User);
  query.equalTo("objectId", request.params.userId);
  query.first({
  useMasterKey: true,
  success: function(object) {
  object.increment("xnumberOfFollowers",+1);
  object.save(null, { useMasterKey: true });
  // Set the job's success status
  response.success('Success Message');
  },
  error: function(error) {
  // Set the job's error status
  response.error('error occured here');
  }
});
  
  /*user.increment("xnumberOfFollowers",+1);
  user.save(null, {useMasterKey: true},{
  	success :function(user) {
  		response.success('welldone')
  	},
  	error :function(error) {
  		response.error("Could not increment number of followers, error " + error.code + ":" + error.message);
  	}
  });*/
});

Parse.Cloud.define('newdecNumOfFollowers', function(request, response) {
  var User = Parse.Object.extend('_User');
  var user = new User();
  var currentUser = new User();
  //currentUser.id = request.params.currentId;
  //user.id = request.params.userId;
  
  var query = new Parse.Query(Parse.User);
  query.equalTo("objectId", request.params.userId);
  query.first({
  useMasterKey: true,
  success: function(object) {
  object.increment("xnumberOfFollowers",-1);
  object.save(null, { useMasterKey: true });
  // Set the job's success status
  response.success('Success Message');
  },
  error: function(error) {
  // Set the job's error status
  response.error('error occured here');
  }
});
