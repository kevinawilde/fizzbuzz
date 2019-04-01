let fbObArr = [{
	denom: 3,
	message: 'fizz'
},{
	denom:5,
	message: 'buzz'
}];



let fizzbuzz = function(arr){
	var returnValue= [];
	let denomArray = arr.map(x => x.denom);
	let messageArray = arr.map(x => x.message);
	let counter;

	for (let i = 1; i <=100; i++){
		counter = i;
		var value = false;
		for(let j = 0; j <= arr.length ; j++){
			if(i % denomArray[j] == 0){
				console.log(messageArray[j]);
				value = true;
			} 
		}
		if(value == false){
			console.log(counter);
		};
	}
}
fizzbuzz(fbObArr);
