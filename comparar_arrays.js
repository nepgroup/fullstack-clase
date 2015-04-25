var arr1 = [22, 400, 13, 25, 70, 56, 73, 15],
	arr2 = [15, 27, 13, 42, 24, 91, 95, 77];

function Compare (arg1, arg2) {
	if (Array.isArray(arg1) && Array.isArray(arg2)) {
		console.log('Ok');
		
		arg1.forEach(function (element, index, array) {
			if (element != arg2[index] ) {
				console.log('true');
			} else{
				console.log('false');
			};
		});
	} else{
		console.log('Error');
	};
};

Compare(arr1, arr2);