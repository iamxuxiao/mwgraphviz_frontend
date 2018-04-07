var express = require('express');
var router = express.Router();
var request = require('request');



router.post('/', function(req, res, next) {
    
    var url="https://XXXXXXX.execute-api.us-east-1.amazonaws.com/mwgraphviz/test"
    request.post(
	{            
	    url:url,
            json:{
	        data: req.body.data
            }
	}
	,function(error, response,body){
	    var str = response.body;
            try{
	        str = str.replace(/\\"/g,'"');
                res.send(str);
            }catch(err){
                res.send(JSON.stringify(str));
            }
    })

});

module.exports = router;
