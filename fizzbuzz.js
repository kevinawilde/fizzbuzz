let printfizzbuzz = function(message, num, denom) {
	if (num % denom == 0) {
		console.log(message);
	}
}
function fizzbuzz(){
	for (let i = 0; i <=100; i++){
		if (i !== 3 ||5){
			console.log(i);
		}
		printfizzbuzz('fizz', i, 3);
		printfizzbuzz('buzz', i, 5);

	}
}
fizzbuzz();