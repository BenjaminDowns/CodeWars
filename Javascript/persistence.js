function persistence(num) {
	var counter = 0
	while (num > 9) {
		counter ++
		num = num.toString().split('').reduce((a,b) => a * b );
	};
	return counter
};

console.log(persistence(39))