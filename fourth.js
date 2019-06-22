var deliveries = require('./deliveries.json');

function economical_bowler(deliveries) {
	var result_obj = {};
	deliveries.forEach(element => {
		if (result_obj[element['bowler']]) {
			result_obj[element['bowler']]['total'] += parseInt(element['total_runs']);
			result_obj[element['bowler']]['extra'] += parseInt(element['extra_runs']);
			result_obj[element['bowler']]['count'] += 1;
		} else {
			result_obj[element['bowler']] = { 'total': 0, 'extra': 0, 'count': 1 };
			result_obj[element['bowler']]['total'] = parseInt(element['total_runs']);
			result_obj[element['bowler']]['extra'] = parseInt(element['extra_runs']);
		}
	});
	//console.log(result_obj);
	var final_result = {};
	for (var ele in result_obj) {
		final_result[ele] = ((result_obj[ele]['total'] - result_obj[ele]['extra']) / result_obj[ele]['count']);
	}
	var sortable = [];
	for (var element in final_result) {
		sortable.push([element, final_result[element]]);
	}
	sortable.sort(function (a, b) {
		return a[1] - b[1];
	});
	//console.log(sortable.slice(0, 5));
	return sortable.slice(0, 5);
}
var result = economical_bowler(deliveries);
var data = JSON.stringify(result);
var fs = require('fs');
fs.writeFile('./highCharts/fourth.json', data);