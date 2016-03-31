var argOne = process.argv[2];
var argTwo = process.argv[3];

if (argOne === argTwo){
	console.log(true);
}
else{
	console.log(false);

}


console.log(process.argv[2] === process.argv[3]);


console.log((process.argv[2] % 7) + (process.argv[3] % 7) === 0);