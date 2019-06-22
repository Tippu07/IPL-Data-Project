var matches = require('./convertcsv.json');
var deliveries = require('./deliveries.json');
var match_id = [];
for (var i in matches) {
	if (matches[i].season === 2016) {
		match_id.push(matches[i].id);
	}
}

function extra_runs(match_id, deliveries) {
	var result_obj = {};
	match_id.forEach(id => {
		//console.log(id);
		deliveries.forEach(ele => {
			if (id === parseInt(ele['match_id'])) {
				if (result_obj[ele['bowling_team']]) {
					result_obj[ele['bowling_team']] += parseInt(ele['extra_runs']);
				}
				else {
					result_obj[ele['bowling_team']] = parseInt(ele['extra_runs']);
				}
			}
		});
	});
	//console.log(result_obj);
	return result_obj;
}
var result = extra_runs(match_id, deliveries);
var data = JSON.stringify(result);
var fs = require('fs');
fs.writeFile('./highCharts/third.json', data);