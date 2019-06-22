var maches = require('./convertcsv.json');
var years = [];
for (var i = 0; i < maches.length; i++) {
	years[i] = maches[i].season;
}
function matches_year(years) {
	var count = {};
	years.forEach(function (year) {
		count[year] = (count[year] || 0) + 1;
	});
	//console.log(count);
	return count;
	
}
var result = matches_year(years);

var data = JSON.stringify(result);
var fs = require('fs');
fs.writeFile('./highCharts/first.json', data);
