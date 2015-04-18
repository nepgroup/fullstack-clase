var arr = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24],
	par = [],
	imp = [];

for (var i = arr.length - 1; i >= 0; i--) {
	if (arr[i] % 2 === 0) {
		par.push(arr[i]);
	} else{
		imp.push(arr[i]);
	};
};
console.log(arr);
console.log(par);
console.log(imp);