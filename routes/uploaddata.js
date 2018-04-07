var express = require('express');
var router = express.Router();
var request = require('request');


router.post('/', function(req, res, next) {
    //console.log(JSON.stringify(req.body.data));

    var url="https://ki5uddwq65.execute-api.us-east-1.amazonaws.com/mwgraphviz/upload";
    request.post(
	{            
 	    url:url,
            json:{
	        "data": req.body.data
           } 
	}
	,function(error, response,body){
	    console.log("post done")
	    var str = response;
	    //console.log(str);
	    //console.log("-------------");
	    //console.log(error);
            res.send(str.body);
 	    
	});
});

module.exports = router;
