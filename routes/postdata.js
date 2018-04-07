var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.post('/', function(req, res, next) {
    //console.log('--------------------')
    //console.log(req.body.data);
    //console.log('--------------------')
    
    var url="https://ki5uddwq65.execute-api.us-east-1.amazonaws.com/mwgraphviz/test"
    request.post(
	{            
	    url:url,
            json:{
	        data: req.body.data
            }
	}
	,function(error, response,body){
	    //console.log(response.body);
	    //console.log("============");
	    var str = response.body;
            try{
	        str = str.replace(/\\"/g,'"');
                res.send(str);
            }catch(err){
                res.send(JSON.stringify(str));
            }
            //str = str.substring(1,str.length-1);
	    //console.log(str)
    })

});

module.exports = router;
