var arr = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77],
	par = [],
	imp = [],
	multi = [];

for (var i = arr.length - 1; i >= 0; i--) {
	if (arr[i] % 2 === 0) {
		par.push(arr[i]);
	} else{
		imp.push(arr[i]);
	};
};

for (var j = Math.max(par.length, imp.length) - 1; j >= 0; j--) {
	if (par[j] === undefined) {
		par[j]  = 1;	
	};
	if (imp[j] === undefined) {
		imp[j]  = 1;	
	};
	multi.push(imp[j] * par[j]);
};
console.log(arr); //Array
console.log(par); //Pares
console.log(imp); //Impares
console.log(multi); //Multiplicados