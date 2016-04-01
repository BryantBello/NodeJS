var fs = require('fs'); //reads and writes files

fs.readFile("best_things_ever.txt", 'utf-8', function(err, data) {

    var output = data.split(',');

    for (var i = 0; i < output.length; i++) {
        console.log(output[i].trim());


    }

});
