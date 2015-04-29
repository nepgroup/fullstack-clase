function infinitSum() {
	return [].reduce.call(arguments, function(prev, cur, index) {
	  return prev + cur
	}, 0);
}