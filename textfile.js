var fs = require('fs'); //reads and writes files

	fs.readFile("hello.txt" , 'utf-8', function(err,data){
		if(err){
			return console.log(err);
		}
	console.log(data);
	});
